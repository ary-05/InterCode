const isProduction = import.meta.env.PROD;

const defaultApiUrl = isProduction ? "/api" : "http://localhost:3000/api";
const defaultWsUrl = isProduction
  ? `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}`
  : "ws://localhost:3000";

export const ENV = {
  WS_URL: import.meta.env.VITE_WS_URL || defaultWsUrl,
  API_URL: import.meta.env.VITE_API_URL || defaultApiUrl,
};