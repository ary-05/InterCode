import express from "express";
import { executeCode } from "../controllers/compilerController.js";

const compilerRouter = express.Router();
compilerRouter.post("/execute", executeCode);

export default compilerRouter;