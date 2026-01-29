# 🚀 Aivora – AI Content Creation Platform

Aivora is a full‑stack AI-powered web application that allows users to generate high-quality **articles, images, and creative content** using modern AI models. The platform provides authentication, content history, publishing controls, and a clean user experience.

---

## ✨ Features

* 🔐 Secure authentication ( OAuth)
* 📝 Article Generation
* 📰 Blog Title Generation
* 🖼️ AI Image Generation
* 🎨 Background Removal
* ✂️ Object Removal from Images
* 📄 Resume Review
* 📂 User content history
* 📱 Responsive UI
* ⚡ Fast performance with Vite + React
* ☁️ Cloud image storage (Cloudinary)

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* CSS 
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MySql
* JWT Authentication
* Cloudinary
* Google OAuth

---

## 📂 Project Structure

```
Aivora/
│
├── client/          # React Frontend
│   ├── src/
│   └── .env.example
│
├── server/          # Node Backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── .env.example
│
└── README.md
```

---

## ⚙️ Environment Variables

Create `.env` files in **client** and **server** folders.
### client/.env
env
# Backend Base URL
VITE_BASE_URL=http://localhost:5000

# Clerk Frontend Publishable Key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key


### server/.env
env
# Google OAuth Credentials
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret

# Client App URL
CLIENT_URL=http://localhost:5173

# Session & JWT Security
SESSION_KEY=your_session_secret
JWT_SECRET=your_jwt_secret

# Clever Cloud MySQL Configuration
MYSQL_ADDON_HOST=
MYSQL_ADDON_DB=
MYSQL_ADDON_USER=
MYSQL_ADDON_PORT=
MYSQL_ADDON_PASSWORD=

# Clerk API Keys
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Gemini AI (Article & Blog Title Generation)
GEMINI_API_KEY=your_gemini_api_key

# ClipDrop (Image Generation)
CLIPDROP_API_KEY=your_clipdrop_api_key

# Cloudinary (Image Storage)
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

> Never commit real `.env` files to GitHub.

---

## 📦 Installation

Clone repository:

```
git clone https://github.com/JayaKaviya/Aivora.git
cd Aivora
```

Install client dependencies:

```
cd client
npm install
```

Install server dependencies:

```
cd ../server
npm install
```

---

## ▶️ Running the Application

Start backend:

```
cd server
npm run dev
```

Start frontend:

```
cd client
npm run dev
```

Open browser:

```
http://localhost:5173
```

---

## 🧠 How It Works

1. User signs in
2. Chooses content type
3. Enters prompt
4. AI processes request
5. Result displayed
6. Content stored in database

---



## 📸 Screenshots



---

## 📌 Roadmap

* ✅ Article Generator
* ✅ Blog Title Generator
* ✅ Image Generator
* ⏳ Background Removal
* ⏳ Object Removal
* ⏳ Review Resume

---

## 🤝 Contributing

Pull requests are welcome.

1. Fork the project
2. Create feature branch
3. Commit changes
4. Open PR

---

## 👩‍💻 Author

**Jaya Kaviya**
Full Stack Developer

GitHub: [https://github.com/JayaKaviya](https://github.com/JayaKaviya)

---

⭐ If you like this project, give it a star!
