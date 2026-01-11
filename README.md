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

## SIGNUP PAGE
<img width="1465" height="758" alt="Screenshot 2026-01-11 at 4 20 31 PM" src="https://github.com/user-attachments/assets/9aa97d6e-5c2d-4dee-a69c-8a514cc5b3ae" />

## LOGIN PAGE 
<img width="1468" height="761" alt="Screenshot 2026-01-11 at 4 31 54 PM" src="https://github.com/user-attachments/assets/d979938c-2418-4572-9fc8-8e024f3a9b92" />


---

### Problem Browsing
- Browse coding problems
- Difficulty-based categorization
- Clean and readable problem descriptions

<img width="1460" height="764" alt="Screenshot 2026-01-11 at 4 34 12 PM" src="https://github.com/user-attachments/assets/3a3a8d2e-752a-419d-987f-1e4bec2c5393" />



---

### Code Editor
- In-browser code editor powered by Monaco Editor
- Syntax highlighting
- Multi-language support
- VS Code–like experience
- Javascript, Java, C++ Supported

<img width="1466" height="762" alt="Screenshot 2026-01-11 at 4 34 52 PM" src="https://github.com/user-attachments/assets/fa139949-4d03-48b4-9f4f-3c1c0613e169" />

---

### Code Execution (Judge0)
- Secure program execution using Judge0 API
- Supports multiple programming languages
- Displays output, compilation errors, and runtime errors


<img width="1468" height="759" alt="Screenshot 2026-01-11 at 4 37 44 PM" src="https://github.com/user-attachments/assets/8c4850a2-f311-4e54-ba52-5633dcc765fd" />
<img width="1465" height="755" alt="Screenshot 2026-01-11 at 4 38 34 PM" src="https://github.com/user-attachments/assets/09ec86d6-9865-471d-b281-02a57a9c7831" />
<img width="1469" height="758" alt="Screenshot 2026-01-11 at 4 38 04 PM" src="https://github.com/user-attachments/assets/10bae9c4-1747-4790-9e9a-0836faa8f43d" />

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

## Admin Panel
- Secure admin authentication and role-based access
- Create, update, and delete coding problems
- Upload and manage problem-related images/photos
- Add and modify test cases, constraints, and difficulty levels
- Manage problem visibility (public/private)
- Monitor user activity and code submissions
- Dashboard with analytics and system insights
<img width="1468" height="725" alt="Screenshot 2026-01-11 at 4 49 05 PM" src="https://github.com/user-attachments/assets/a1d87c5c-e0e3-496d-9849-5fb1006506af" />
<img width="1465" height="757" alt="Screenshot 2026-01-11 at 4 49 35 PM" src="https://github.com/user-attachments/assets/bbfebb7f-d415-4ff4-9288-62175a416dd4" />
<img width="1462" height="750" alt="Screenshot 2026-01-11 at 4 49 59 PM" src="https://github.com/user-attachments/assets/9dc82c32-5f12-42d7-bc56-2ae209b9576e" />
<img width="1460" height="749" alt="Screenshot 2026-01-11 at 4 46 49 PM" src="https://github.com/user-attachments/assets/faf20be7-b302-4e05-8365-7119d417ed88" />
<img width="1464" height="721" alt="Screenshot 2026-01-11 at 4 50 32 PM" src="https://github.com/user-attachments/assets/38ca1c62-ae81-4037-a407-00e8fbf01b91" />


---
## AI Chatbot
- AI-powered coding assistant for user guidance
- Explains problems and suggests approaches 
- Helps debug code and clarify errors
- Available in real-time during problem solving
- Helps only in refrence of code.
<img width="1468" height="758" alt="Screenshot 2026-01-11 at 4 51 27 PM" src="https://github.com/user-attachments/assets/d006c01a-72fb-4fac-abf3-9b4a77786593" />



---

## Code Submission
- Supports multiple programming languages
- Real-time code execution and evaluation
- Test case-based validation
- Clear verdicts: Accepted, Wrong Answer, or Error

<img width="1463" height="763" alt="Screenshot 2026-01-11 at 4 26 08 PM" src="https://github.com/user-attachments/assets/d2e3d267-598e-4c69-96b4-04b0defcc8b4" />

---

## Code Solution
- Step-by-step optimized solutions
- Available after successful submission
- Time and space complexity explained
- Clean and readable reference implementations


<img width="1468" height="758" alt="Screenshot 2026-01-11 at 4 53 11 PM" src="https://github.com/user-attachments/assets/60b91425-d7cf-4c97-8cfb-44a2afeea15e" />

---


## Tested API Collections
<img width="1274" height="794" alt="Screenshot 2026-01-11 at 4 28 14 PM" src="https://github.com/user-attachments/assets/2a52e83d-cb3c-4b6e-8a15-77f10ae31882" />


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
- Google Gemini API (AI Chatbot integration)
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
