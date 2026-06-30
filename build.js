// build.js

import fs         from "node:fs"
import Handlebars from "handlebars"
import data       from "./src/data.js"

export function build() {
   
    const source   = fs.readFileSync("./src/index.hbs", "utf8")
    const template = Handlebars.compile(source)
    const html     = template(data)
    
    fs.mkdirSync("./dist", { recursive: true })
    fs.writeFileSync("./dist/index.html", html)
    fs.cpSync("src/static", "dist/static", {
        recursive: true,
        force: true
    })

    console.log("Built")
}

build()