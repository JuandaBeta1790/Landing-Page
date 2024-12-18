import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://JuandaBeta1790.github.io/Landing-Page",
  base: "", // Cambia 'Landing-Page' por el nombre de tu repositorio en GitHub
});
