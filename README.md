📄 The "Node.js Fundamentals" README
Markdown
# 🚀 Node.js Backend Basics

This repository contains my initial steps into server-side JavaScript. My goal for this week is to master the core modules, package management, and basic routing.

---

## 📅 Weekly Progress Tracker

- [x] **Day 1-2:** Node.js Architecture (V8 & Event Loop)
- [x] **Day 3:** Package Management (npm vs. Yarn)
- [x] **Day 4:** Native HTTP Module & Basic Routing
- [ ] **Day 5:** Express.js Middleware
- [ ] **Day 6:** Asynchronous Patterns (Async/Await)
- [ ] **Day 7:** Simple REST API Project

---

## 🛠️ How to Run Locally

1. **Clone the repo:**
   ```bash
   git clone <your-repo-link>
Navigate to the directory:

Bash
cd node-js-basics
Run the server:

Bash
node server.js
Access in browser: Visit http://localhost:3000

🧠 Key Learnings
📦 Dependency Management
I explored the difference between npm and Yarn.

npm: The standard, built-in manager.

Yarn: Fast, reliable, and uses a yarn.lock for strict versioning.

🌐 The HTTP Module
I built a server without frameworks to understand the Request/Response cycle.

req.url: Used to identify the path (e.g., / or /about).

res.statusCode: Manually setting 200 (Success) or 404 (Not Found).

res.setHeader: Telling the browser to render text/html.

📜 Project Structure
server.js - My native HTTP server with basic routing.

package.json - Project metadata and dependencies.

you start using **Express**, you'll likely want to install a package called **Nodemon**. 

**Nodemon** is a tool that automatically restarts your server every time you save a file so you don't have to keep typing `node server.js` manually. It’s a huge quality-of-life upgrade!
