import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        exclude: "node_modules/**", 
        plugins: ["@babel/plugin-transform-react-jsx"], 
      },
    }),
  ],
});
