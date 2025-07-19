# 🛒 Meesho E-Commerce Clone

A fully functional clone of the popular e-commerce platform **Meesho**, built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The app supports user authentication, product browsing, cart, search, and admin-level product management — with UI/UX inspired by Meesho.

## 🚀 Live Demo

🔗 [Live Site on Vercel](https://meesho-ecommerceclone.vercel.app/)
🔗 [Backend API](https://your-backend-url.com/api) *(if hosted)*


## 🧰 Tech Stack

- **Frontend:** React.js, Redux, React Router DOM, Axios
- **Backend:** Node.js, Express.js, JWT
- **Database:** MongoDB, Mongoose
- **Auth:** JWT + bcrypt for login/signup
- **Deployment:** Vercel (frontend), Render(backend), MongoDB Atlas

---

## ✨ Features

### 👤 User Features
- User registration & login (JWT-based authentication)
- Browse products by category
- Product search & filtering
- Add to Cart / Remove from Cart
- Cart persistence
- Order placement (dummy/mock)
- Responsive design (mobile-first)

### 🔐 Admin Features
- Admin login (separate role)
- Add, edit, and delete products
- View all users
- Manage product inventory

---

## 📁 Folder Structure

meesho-clone/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ └── App.js
│ └── public/
│
├── server/ # Node.js backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ └── server.js
│
└── README.md

yaml
Copy
Edit

---

## 🔒 Authentication

- **User passwords hashed** using `bcrypt`
- JWT token sent in headers for protected routes
- Role-based access for admin & users

---

## ⚙️ Installation & Run Locally

### 🖥️ Prerequisites

- Node.js
- MongoDB (local or Atlas)

### 📦 Backend

```bash
cd server
npm install
# Create .env file with Mongo URI & JWT secret
npm start
🌐 Frontend
bash
Copy
Edit
cd client
npm install
npm start
🌍 Environment Variables
In the /server/.env file:

ini
Copy
Edit
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
📊 Performance
Optimized component rendering using React memoization

RESTful APIs designed for modular and scalable architecture

Handles 1000+ mock products with efficient search and state management (Redux)

📚 Learnings
Implemented Redux for large-scale state management

Practiced full-stack development with real-world ecommerce flow

Improved responsive design and UX handling edge cases

👨‍💻 Author
Mohammad Ziya
🔗 LinkedIn
🔗 GitHub

⭐ Feedback
If you liked this project, please consider giving it a ⭐ on GitHub.

Feel free to fork it and build your own version — PRs are welcome!

yaml
Copy
Edit

---

Let me know if:
- You want a **banner image** for the top of the README.
- You want to convert it into a **portfolio card** for your website.
- You want help with deploying the backend so it’s 100% live.

Your GitHub will start attracting recruiters once this is in place. Let’s upgrade every project like th
