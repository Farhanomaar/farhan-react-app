// vite-patched.js
import { webcrypto } from "crypto";

// Patch early
globalThis.crypto = webcrypto;

// Start Vite
import("vite").then(({ createServer }) => {
  createServer().then((server) => server.listen());
});
