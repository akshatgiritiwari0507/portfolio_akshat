# 🚀 Personal Developer Portfolio

This repository contains the source code for my personal developer portfolio, built using **React, Vite, Tailwind CSS, and Framer Motion**.

The purpose of this portfolio is to showcase my technical skills, projects, and software development journey in a clean, professional, and structured way. It reflects how I think about frontend architecture, UI consistency, and maintainable code organization.

This project is intentionally designed to be minimal, modern, and recruiter-focused.

---

## 🔗 Live Preview

https://akshat05-portfolio.netlify.app/

---

# 🧠 Why I Built This Portfolio

As a Computer Science undergraduate preparing for Software Development roles, I wanted a portfolio that:

- Clearly presents my projects and technical stack
- Reflects structured frontend architecture
- Demonstrates responsiveness and UI consistency
- Avoids unnecessary design noise
- Feels professional rather than flashy

Instead of using a template, I built this portfolio from scratch to better understand layout systems, animation flow, and scalable component design.

---

# 🛠 Tech Stack

### Frontend
- **React** (Component-based UI development)
- **Vite** (Fast development environment)
- **Tailwind CSS** (Utility-first styling)
- **Framer Motion** (Subtle animations and modal transitions)

### Tooling
- ESLint for code consistency
- Modular file structure for scalability

---

# 📂 Project Structure

📦portfolio
┣ 📂public
┃ ┣ 📜resume.pdf
┃ ┗ 📜vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂logos
┃ ┃ ┣ 📂projects
┃ ┃ ┗ 📜profile.jpeg
┃ ┣ 📂components
┃ ┃ ┗ 📜Reveal.jsx
┃ ┣ 📂layout
┃ ┃ ┣ 📜Layout.jsx
┃ ┃ ┗ 📜Navbar.jsx
┃ ┣ 📂sections
┃ ┃ ┣ 📜Hero.jsx
┃ ┃ ┣ 📜About.jsx
┃ ┃ ┣ 📜TechStack.jsx
┃ ┃ ┣ 📜Projects.jsx
┃ ┃ ┗ 📜Contact.jsx
┃ ┣ 📜App.jsx
┃ ┣ 📜index.css
┃ ┗ 📜main.jsx
┣ 📜tailwind.config.js
┣ 📜vite.config.js
┗ 📜package.json






---

# 🧩 Architecture & Design Approach

The portfolio follows a **section-based modular architecture**.

Each major section of the page is separated into its own component:

- Hero
- About
- Tech Stack
- Projects
- Contact

This ensures:
- Cleaner code organization
- Easy scalability
- Simple maintenance
- Separation of concerns

---

## 🔹 Layout Layer

- `Navbar.jsx` → Fixed navigation with scroll detection and smooth behavior
- `Layout.jsx` → Wraps the entire application and manages spacing below the fixed navbar

---

## 🔹 Reusable Components

### `Reveal.jsx`
A reusable animation wrapper built using Framer Motion.

Instead of manually animating each section, I created a reusable component to:
- Maintain consistency
- Reduce repetition
- Improve readability

---

# ✨ Key Features

## 🔹 Smooth Scroll Navigation
Implemented via CSS to ensure smooth transitions between sections.

## 🔹 Scroll-based Section Reveal
Sections fade and slide into view using Framer Motion for subtle visual enhancement.

## 🔹 Interactive Project Cards
Each project card:
- Displays a screenshot
- Has hover interaction
- Opens a modal on click

## 🔹 Animated Project Modal
The modal:
- Fades in with backdrop blur
- Scales smoothly using animation
- Displays project details
- Contains GitHub link
- Placeholder for demo video (real demos to be added)

## 🔹 Resume Integration
The resume is stored in the `/public` directory and linked directly from the Hero section.

## 🔹 Responsive Layout
- Built mobile-first
- Uses Flexbox and Grid
- Responsive breakpoints using Tailwind (`md:`)
- Content stacks naturally on smaller screens

---

# 🖼 Projects Section Design

Each project card includes:

- Screenshot preview
- Short technical description
- Clean hover effect
- Click-to-open modal
- GitHub repository link
- Demo video placeholder (to be replaced with actual demos)

The modal interaction is built using `AnimatePresence` from Framer Motion for smooth open/close transitions.

---

# 🎨 UI & Design Decisions

### 🌙 Dark Theme
Chosen for:
- Better visual contrast
- Modern developer aesthetic
- Reduced eye strain
- Professional appearance

### ✨ Minimal Design Philosophy
I avoided:
- Heavy gradients
- Over-animation
- Large decorative elements

The focus remains on:
- Projects
- Skills
- Clarity

---

# 📱 Responsiveness Strategy

This portfolio is designed to work across devices.

Techniques used:
- `flex-col` → `md:flex-row`
- Grid-based project layout
- Flexible containers
- Controlled spacing rhythm

Mobile optimization improvements are planned for final polish phase.

---

# 🚀 Future Improvements

- Add real demo videos for each project
- Improve mobile navbar with hamburger menu
- Add active section highlighting in navbar
- Performance optimization
- Final deployment on Vercel
- Lighthouse performance tuning

---

# 🧑‍💻 How to Run Locally

1. Clone the repository

```bash
git clone <repo-link>



2. Install dependencies

npm install

3. Start development server

npm run dev


4. Open in browser:

http://localhost:5173





📌 What This Portfolio Demonstrates

This project reflects:

Component-based React architecture

Clean code organization

Practical UI implementation

Responsive design principles

Thoughtful animation usage

Professional presentation of work

It is not just a static showcase — it reflects how I structure frontend applications and think about maintainable design systems.

📬 Contact

If you would like to connect:

Email: akshatgiritiwari@gmail.com

LinkedIn: (Add your LinkedIn URL)

GitHub: (Add your GitHub profile link)

⭐ Thank You for Visiting

If you’ve taken the time to review this portfolio, I truly appreciate it.

I am currently preparing for Software Development roles and continuously improving my problem-solving and system design skills.



📌 Adding a New Project

# ➕ How to Add a New Project

This portfolio is designed to be easily extendable.  
To add a new project, follow the steps below.

---

## 1️⃣ Add Project Screenshot

Place your project screenshot inside:


src/assets/projects/


Example:src/assets/projects/newproject.png


Make sure:
- Image is cleanly cropped
- Prefer 16:9 aspect ratio
- Avoid cluttered backgrounds

---

## 2️⃣ Import the Screenshot

Open:

src/sections/Projects.jsx



At the top, import your new image:

```javascript
import newproject from "../assets/projects/newproject.png"
3️⃣ Add Project Object

Inside the projects array, add a new object:

{
  title: "Project Name",
  description: "Short technical description explaining what the project does and the technologies used.",
  image: newproject,
  github: "https://github.com/your-repository-link",
}


If demo video support is enabled, you can also include:

video: "https://www.youtube.com/embed/YOUR_VIDEO_ID"

4️⃣ That’s It

The UI automatically renders new project cards using the projects.map() function.

No additional layout changes are required.