import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://NbdyKnows.github.io/vite-rick-and-morty/",
    plugins: [react()],
});
