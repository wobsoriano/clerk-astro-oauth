import { defineConfig } from "astro/config";
import vercelServerless from '@astrojs/vercel/serverless';
import clerk from "@clerk/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), react()],
  output: "server",
  adapter: vercelServerless(),
});
