🚀 **Aivora – AI Content Creation Platform**

Aivora is a full-stack AI-powered web application that allows users to generate high-quality **articles, images, and creative content** using modern AI models. The platform provides authentication, content history, publishing controls, and a clean user experience.

🌐 **Live Demo:** [Visit Aivora](https://aivorajk.vercel.app/)


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
* Cloudinary
* Google SignIn - OAuth

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
cd client\myapp
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
cd client\myapp
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

# Welcome Page - Google SIGN IN 

<img width="1913" height="959" alt="image" src="https://github.com/user-attachments/assets/0845b43b-af60-490f-9ca7-9af733192acb" />

# Profile Page - Data from google 
<img width="1917" height="965" alt="image" src="https://github.com/user-attachments/assets/7f246441-adf8-4834-8f59-2649d47ccac2" />

# Home Page 
<img width="1920" height="949" alt="image" src="https://github.com/user-attachments/assets/c211ccd5-c1a0-47dd-b682-b38ab2a0f0de" /> 

# Tools 
<img width="1920" height="964" alt="image" src="https://github.com/user-attachments/assets/9c329525-600f-4faa-84be-c3b6320134d5" />

# Testimonials 
<img width="1917" height="960" alt="image" src="https://github.com/user-attachments/assets/72249cbd-cddc-4c62-8f6b-788b871558c8" /> 

# Plans

<img width="1910" height="952" alt="image" src="https://github.com/user-attachments/assets/20667156-de43-4cb3-aefe-84d0133bc180" /> 

# Footer 
<img width="1915" height="969" alt="image" src="https://github.com/user-attachments/assets/6232caf0-a1d7-4004-818a-4418c7d6f13f" />



## AIVORA FEATURES 

# 1.Dashboard 

<img width="1914" height="874" alt="Screenshot 2026-01-05 114538" src="https://github.com/user-attachments/assets/ded9d60b-0a41-4db0-bfe1-e9366ca98454" />
<br/>
<br/>
<img width="1915" height="965" alt="image" src="https://github.com/user-attachments/assets/52ed2bbd-54df-43e2-8121-98bc3d3dfabf" />
<br/>
<br/>
<img width="1918" height="872" alt="Screenshot 2026-01-05 114613" src="https://github.com/user-attachments/assets/f21e574d-ba16-49f9-829e-192e9d759cd8" />

# 2.Write Article 
<img width="1920" height="872" alt="Screenshot 2026-01-04 184747" src="https://github.com/user-attachments/assets/4999450c-a575-48c0-9d37-f319cc5d2e6f" />

# 3.Blog Title
<img width="1918" height="870" alt="Screenshot 2026-01-04 200833" src="https://github.com/user-attachments/assets/cedd0884-2180-4e52-8287-8c30a5019f4a" />

# 4.Generate Image in Premium Feature - Realistic
<img width="1920" height="835" alt="Screenshot 2026-01-04 202402" src="https://github.com/user-attachments/assets/fc03eaf8-5a47-4638-924d-517f39c3799e" /> 

# Validation in Free Plan
<img width="1910" height="869" alt="Screenshot 2026-01-04 202905" src="https://github.com/user-attachments/assets/dad73a59-2b30-4dd2-8f2a-87e1ea3355c1" /> 

# Generate Image in Premium Feature - Ghibli Style
<img width="1920" height="834" alt="Screenshot 2026-01-04 203038" src="https://github.com/user-attachments/assets/fce696b9-e598-4be8-9858-2f6c5e56585b" />

# 5.Remove Background in Premium Feature 
<img width="1917" height="834" alt="Screenshot 2026-01-04 205703" src="https://github.com/user-attachments/assets/ed182d89-89a5-48df-9a11-3246831e92af" />

# Validation in Free Plan
<img width="1920" height="870" alt="Screenshot 2026-01-04 205510" src="https://github.com/user-attachments/assets/44692667-32fa-4ac5-8232-42dd4d334254" />

# 6.Remove Object 
<img width="1912" height="839" alt="Screenshot 2026-01-04 210739" src="https://github.com/user-attachments/assets/88dfa5f4-637d-41f6-b8b5-9b0c644c1b79" />

# Validation in Free Plan
<img width="1919" height="870" alt="Screenshot 2026-01-04 211803" src="https://github.com/user-attachments/assets/93568eba-8134-41d4-b441-90597a05b136" />

# 7.Review Resume
<img width="1920" height="838" alt="Screenshot 2026-01-04 215901" src="https://github.com/user-attachments/assets/e8634481-0846-4fba-bee3-90de850e5116" />

# Validation in Free Plan
<img width="1920" height="867" alt="Screenshot 2026-01-04 215951" src="https://github.com/user-attachments/assets/a65dfad5-a215-40e9-9492-16f7a78a23b0" />

# 8.Generated Public Images
<img width="1920" height="862" alt="Screenshot 2026-01-04 231951" src="https://github.com/user-attachments/assets/dd3ed3b0-daa3-40b2-bd6e-c85b34cfb17f" />

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
