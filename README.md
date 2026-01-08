# LeetCode Project – Full Stack Coding Practice Platform

A full stack LeetCode-style coding practice platform designed to provide a real-world problem-solving and online judge experience.  
The platform allows users to practice coding problems, write and execute code in the browser, view editorials with video support, and track progress efficiently.

The project is fully deployed on **AWS EC2** and uses modern scalable technologies for performance, security, and maintainability.

---

## Project Overview

This project simulates an online coding platform similar to LeetCode, focusing on:

- Real-time code execution
- Secure backend APIs
- Scalable architecture
- Clean and responsive frontend
- Editorial support with video explanations

It demonstrates strong understanding of **full stack development**, **API design**, **third-party integrations**, and **system-level concepts**.

---

## Features

### Authentication
- User signup and login
- JWT-based authentication
- Secure protected routes

[IMAGE PLACEHOLDER – LOGIN PAGE]  
[IMAGE PLACEHOLDER – SIGNUP PAGE]

---

### Problem Browsing
- Browse coding problems
- Difficulty-based categorization
- Clean and readable problem descriptions

[IMAGE PLACEHOLDER – PROBLEM LIST PAGE]

---

### Code Editor
- In-browser code editor powered by Monaco Editor
- Syntax highlighting
- Multi-language support
- VS Code–like experience

[IMAGE PLACEHOLDER – CODE EDITOR]

---

### Code Execution (Judge0)
- Secure program execution using Judge0 API
- Supports multiple programming languages
- Displays output, compilation errors, and runtime errors

[IMAGE PLACEHOLDER – CODE EXECUTION OUTPUT]

---

### Editorials with Video Support
- Editorial explanations for problems
- Videos stored and served using Cloudinary
- Fast and optimized media delivery

[IMAGE PLACEHOLDER – EDITORIAL PAGE]

---

### Performance Optimization (Redis)
- Redis used for caching frequently accessed data
- Faster API responses
- Reduced database load
- Improved scalability

---

### State Management
- Global state handled using Redux Toolkit
- Predictable state flow
- Clean separation of concerns

---

### Responsive UI
- Fully responsive design
- Optimized for desktop and mobile
- Modern UI using Tailwind CSS and DaisyUI

[IMAGE PLACEHOLDER – HOMEPAGE]

---

## Tech Stack

### Frontend
- React 19
- Vite
- JavaScript (ES Modules)
- Tailwind CSS
- DaisyUI
- Redux Toolkit
- React Redux
- React Router
- Monaco Editor
- React Hook Form
- Zod
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Code Execution
- Judge0 API

### Caching
- Redis

### Media Storage
- Cloudinary (editorial videos)

### Deployment
- AWS EC2

### Tooling
- ESLint
- Git and GitHub

---
```text

## Project Structure
Leetcode_project/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ ├── services/
│ │ └── main.jsx
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── utils/
│ │ └── index.js
│ ├── package.json
│ └── .env
│
├── README.md

```` 
## Environment Variables
PORT=3000

DB_CONNECT_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/<db_name>

JWT_KEY=your_jwt_secret

REDIS_PASS=your_redis_password

JUDGE0_API_KEY=your_judge0_api_key

GEMINI_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


## Deployment
Frontend and backend are deployed on AWS EC2
Reverse proxy and process management configured for production
Environment variables securely managed on the server
