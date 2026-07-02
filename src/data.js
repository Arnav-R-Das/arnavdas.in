// src/data.js

const skills = [
  {
    skill: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    skill: "Backend",
    items: ["Node.js", "Express", "Fastify", "FastAPI"],
  },
  {
    skill: "DevOps",
    items: ["GIT", "GitHub", "GitHub Actions", "Docker", "Nginx", "Caddy"],
  },
  {
    skill: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "MariaDB", "SQLite"],
  },
  {
    skill: "Frontend",
    items: ["HTMX", "Bootstrap"],
  },
]

const projects = [
  {
    project_name: "Ember — Dating site ",
    tech_stack:   "Typescript, React, Node.js, Express, Prisma MongoDB, Mongoose",
    description:  "",
    live_link:    "ember",
    github_link:  "Ember",
    screenshots_directory: "ember",
    screenshots:  ["4", "5", "6", "8"],
  },
  {
    project_name: "SmartHire — AI Interviewer",
    tech_stack:   "React, Python, FastAPI, SQLAlchemy, PostgreSQL",
    description:  "",
    live_link:    "smarthire",
    github_link:  "SmartHire",
    screenshots_directory: "smarthire",
    screenshots:  ["auth/1", "recruiter/2", "candidate/5", "candidate/11"],
  },
]

const experiences = [
  {
    duration:         "January 2026 - June 2026",
    company_name:     "Inbox Infotech Pvt. Ltd.",
    company_website:  "inboxtechs.com",
    location:         "Vadodara, India",
    role:             "Fullstack Developer Intern",
    responsibilities: [
      "Engineered a reusable microservice starter template using Node.js, TypeScript, Fastify, Zod, Prisma, Biome, and Docker; enabling faster backend service development across projects.",
      "Developed an electronics e-commerce prototype (MERN stack); featuring API rate limiting, type-safety (Typescript), schema validation (Zod), API docs, API testing (Vitest), CI/CD pipeline (GitHub Actions) and Dockerized deployment.",
      "Fixed UI bugs in a React Native mobile app.",
    ],
    img_src:          "inbox_infotech_logo.jpeg",
  },
  {
    duration:         "December 2025 - January 2026",
    company_name:     "Amdox Technologies",
    company_website:  "amdox.in",
    location:         "Bangalore, India",
    role:             "Data Science & Analysis Intern",
    responsibilities: [
      "Completed formal training in data science concepts, workflows, and machine learning fundamentals.",
      "Developed an AI-based employee sentiment & stress detection system that analyzed emotional and mental state indicators, automated task allocation, and reported critical cases to management or medical professionals when required.",
      "Implemented sentiment analysis using NLP, stress/emotion classification model, and task recommendation engine.",
    ],
    img_src:          "amdox_technologies_logo.jpeg",
  },
  {
    duration:         "June 2025 - July 2026",
    company_name:     "CognifyZ Technologies",
    company_website:  "cognifyz.com",
    location:         "Nagpur, India",
    role:             "Fullstack Developer Intern",
    responsibilities: [
      "Developed & deployed an electronics e-commerce web application using MERN stack.",
      "Implemented RESTful API, modular architecture, JWT auth, role-based access and payment gateway (Stripe)."
    ],
    img_src:          "cognifyz_technologies_logo.jpeg",
  },
  {
    duration:         "December 2024 - January 2025",
    company_name:     "MaMo TechnoLabs LLP",
    company_website:  "mamotechnolabs.com",
    location:         "Vadodara, India",
    role:             "Fullstack Developer Intern",
    responsibilities: [
      "Developed & deployed a furniture e-commerce platform using PHP & MySQL; featuring admin inventory management, search with filters/sorting, cart & wishlist, and responsive UI."
    ],
    img_src:          "mamo_technolabs_logo.jpeg",
  }
]

const contacts = [
  {
    show: "arnavrdas@gmail.com",
    link: "mailto:arnavrdas@gmail.com",
    icon: "email",
  },
  {
    show: "linkedin.com/in/arnavrdas",
    link: "https://linkedin.com/in/arnavrdas/",
    icon: "linkedin",
  },
  {
    show: "github.com/arnavrdas",
    link: "https://github.com/arnavrdas/",
    icon: "github",
  },
]

export default {
  skills,
  projects,
  experiences,
  contacts,
}