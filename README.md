## Project Structure
```text
portfolio/
├── .github/workflows/deploy.yml    # For deploying to GitHub Pages
├── src/
│   ├── index.hbs                   # Main Handlebars template
│   ├── data.js                     # For template input
│   └── static/
│       ├── assets/
│       │   ├── images/
│       │   └── resume/
│       └── global.styles.css
├── dist/                           # Generated build output
├── build.js                        # For building static HTML
├── vite.config.js                  # For development server
└── package.json
```
<br><br><br>

## Tech Stack
- **Templating Engine:** Handlebars
- **CSS Framework:** Bootstrap
- **Build Tool:** Vite 
<br><br><br>

## Setup

  ### Prerequisites
  - Node.js 18+ (or newer)
  - npm

  ### Step 1: Install dependencies
  ```bash
    npm i
  ```
  
  ### To start development server
  ```bash
    npm run dev
  ```
  
  ### To build static HTML
  ```bash
    npm run build
  ```