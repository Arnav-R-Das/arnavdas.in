// vite.config.js
import { defineConfig } from "vite"
import chokidar from "chokidar"
import { build } from "./build.js"

export default defineConfig({
    root: "dist",
    plugins: [
        {
            name: "portfolio-builder",
            configureServer(server) {
                build()
                const watcher = chokidar.watch("src", { ignoreInitial: true })
                watcher.on("all", () => {
                    build()
                    server.ws.send({ type: "full-reload" })
                })
            }
        }
    ]
})