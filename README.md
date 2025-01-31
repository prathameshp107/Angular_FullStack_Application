# 📌 Full-Stack Application

Welcome to the **Full-Stack Application**! 🚀 This application is built using **Angular** (Frontend) and **Node.js with Express** (Backend), and it connects to **MongoDB** and **MySQL** databases.

---

## 📋 Table of Contents

- [🛠 Features](#-features)
- [📦 Tech Stack](#-tech-stack)
- [⚡ Installation](#-installation)
- [🖥️ Running the Application](#️-running-the-application)
- [📡 API Endpoints](#-api-endpoints)
- [🚀 Deployment](#-deployment)
- [📄 License](#-license)

---

## 🛠 Features

✅ Secure **User Authentication** (Login & Registration) 🔑  
✅ Role-Based Access Control (RBAC) 👥  
✅ File Upload & Download 📂  
✅ API with JSON Web Token (JWT) Authentication 🔐  
✅ Real-time Notifications 🔔  
✅ Admin Dashboard 📊  

---

## 📦 Tech Stack

### Frontend (Angular)
- **Angular 18** (Latest Version)
- **RxJS** for state management
- **Angular Material** for UI components
- **Ngx-Toastr** for notifications

### Backend (Node.js + Express)
- **Node.js 20.16.0**
- **Express.js** (Fast API framework)
- **Mongoose** (MongoDB ORM)
- **Sequelize** (MySQL ORM)
- **JSON Web Token (JWT)** for authentication

### Database
- **MongoDB 7.0** (For NoSQL storage)
- **MySQL 8.4.2** (For relational data)

---

## ⚡ Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/fullstack-app.git
cd fullstack-app
```

### 2️⃣ Install Dependencies
#### 🖥 Backend (Node.js + Express)
```sh
cd backend
npm install
```

#### 🌐 Frontend (Angular)
```sh
cd ../frontend
npm install
```

---

## 🖥️ Running the Application

### 1️⃣ Start the Backend Server
```sh
cd backend
npm start
```
> The backend runs on `http://localhost:5000`

### 2️⃣ Start the Frontend (Angular)
```sh
cd ../frontend
ng serve
```
> The frontend runs on `http://localhost:4200`

---

## 📡 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user & get JWT |
| GET  | `/api/auth/user` | Get logged-in user details |

### 📁 File Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/files/upload` | Upload a file |
| GET  | `/api/files/download/:id` | Download a file |

---

## 🚀 Deployment

### 🌍 Deploy Frontend (Angular)
```sh
ng build --configuration=production
```
Host the `dist/` folder on **Netlify, Vercel, or Firebase Hosting**.

### ☁ Deploy Backend (Node.js)
```sh
npm run build
```
Deploy on **Heroku, AWS, or DigitalOcean**.

---

## 📄 License
This project is licensed under the **MIT License**. 📝

---

💡 **Contributions are welcome!** Feel free to fork this repo and submit a PR. 😊

