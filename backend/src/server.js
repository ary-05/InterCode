import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from "./middleware/protectRoute.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import compilerRouter from "./routes/compilerRoute.js";

const app = express();
const __dirname = path.resolve();
const frontendDistPath = path.join(__dirname, "../frontend/dist"); 
//head status
app.use((req, res, next) => {
  if (req.method === 'HEAD') {
    return res.sendStatus(200);
  }
  next();
});
//middlewares
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
//cred true means : server allows frontend to inc cookies on request
app.use(clerkMiddleware()); //this adds auth to request object : req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/compiler", compilerRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is running" });
});
// Serve frontend only when a local build exists (backend-only deploys like Railway won't have this folder).
if (ENV.NODE_ENV === "production" && fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    const server = app.listen(ENV.PORT, () =>
      console.log("Server running on port :", ENV.PORT)
    );

    // WebSocket server setup
    const wss = new WebSocketServer({ server });

    wss.on("connection", (ws, req) => {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const sessionId = url.searchParams.get("sessionId");

      if (!sessionId) {
        ws.close(1008, "Session ID missing");
        return;
      }

      // Attach sessionId to the WebSocket connection
      ws.sessionId = sessionId;

      // Handle WebSocket messages here
      ws.on("message", (message) => {
        // Broadcast to other clients in the same session
        wss.clients.forEach((client) => {
          if (
            client !== ws &&
            client.sessionId === sessionId &&
            client.readyState === ws.OPEN
          ) {
            client.send(message.toString());
          }
        });
      });
    });
  } catch (error) {
    console.error("Error starting the server", error);
  }
};
startServer();