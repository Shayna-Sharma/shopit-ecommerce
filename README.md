# ShopIT - Full Stack E-Commerce Platform

🚧 **Project Status:** Under Development

## 📌 Overview

ShopIT is a full-stack e-commerce web application being developed using **Django, Django REST Framework, and React**.

The project focuses on building a complete shopping platform with product management, RESTful APIs, a React-based frontend, shopping cart functionality, order processing, and user authentication.

The objective of this project is to gain hands-on experience in building production-style web applications using modern full-stack technologies while following clean component-based architecture and REST API design.

---

## 🚀 Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* Axios

### Backend

* Python
* Django
* Django REST Framework

### Database

* SQLite *(Development)*
* PostgreSQL *(Planned)*

### Tools

* Git
* GitHub

---

## ✨ Current Features

### Backend

* Custom User Model
* Product Model
* Product Categories
* Automatic Slug Generation for Products
* Product Image Upload and Media Handling
* Django Admin Product Management
* Django REST Framework Integration
* REST API for Product Data
* JSON-based API Responses

### Frontend

* React + Vite Setup
* Component-Based Architecture
* Reusable Product Card Components
* Responsive Product Grid
* Axios API Integration
* Product Data Fetching from Django Backend
* Product Listing Page
* Dynamic Product Information Rendering
* Product Images Loaded from Django Media Files
* React Router Integration for Product Links

### Full-Stack Integration

* React frontend connected with Django REST API
* Product data fetched from the backend using Axios
* Backend product data stored in React state
* Product data passed between React components using props
* Dynamic rendering of products using `.map()`
* Django media files displayed in the React frontend

---

## 🚧 Features Under Development

* User Registration & Login
* Product Details Page
* Shopping Cart
* Wishlist
* Checkout
* Order Management
* Payment Integration
* User Dashboard
* Search & Filtering
* Product Reviews & Ratings

---

## 📂 Project Structure

```text
ShopIT-Ecommerce/
│
├── FrontEnd/
│   └── Shoppit_app/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
├── ShopIT/
│   ├── Core_app/
│   ├── shop_app/
│   ├── ShopIT/
│   ├── media/
│   ├── manage.py
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/shopit-ecommerce.git
```

---

### Backend Setup

```bash
cd ShopIT

python -m venv .venv
```

#### Windows

```bash
.venv\Scripts\activate
```

#### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

---

### Frontend Setup

Open another terminal and run:

```bash
cd FrontEnd/Shoppit_app

npm install

npm run dev
```

The frontend and backend run as separate development servers and communicate through the REST API.

---

## 🎯 Learning Objectives

This project is being developed to strengthen practical knowledge of:

* Django
* Django REST Framework
* React
* Axios and HTTP API communication
* REST API Design
* Component-Based Architecture
* React State and Props
* Database Design
* Authentication
* Full Stack Development
* Git & GitHub
* Software Architecture

---

## 📈 Future Improvements

* JWT Authentication
* Docker Deployment
* Redis Caching
* Recommendation System
* Email Notifications
* Payment Gateway Integration
* CI/CD Pipeline
* Cloud Deployment
* PostgreSQL Production Database

---

## 👩‍💻 Author

**Shayna Sharma**

GitHub: https://github.com/Shayna-Sharma

LinkedIn: https://www.linkedin.com/in/shayna-sharma-76b106292/

---

⭐ This project is actively being developed. New features and improvements are continuously being added.