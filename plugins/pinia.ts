import { defineNuxtPlugin } from "#app";
import piniaPersist from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return; // Avoid running on the server

  nuxtApp.$pinia.use(piniaPersist); // Register the persistence plugin for the Pinia instance
});
