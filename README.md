# 🏫 School Management System (MERN Stack)

Welcome to the School Management System! This project aims to provide a comprehensive platform for managing school information, facilitating admissions, and engaging with the school community. Built with the MERN stack, it leverages modern web technologies for a robust and scalable solution.

---

## 🚀 Technologies Used

This project utilizes a powerful set of technologies for both the frontend and backend:

### Frontend
* **Next.js (App Router):** A React framework for building fast, scalable, and SEO-friendly applications.
* **Yup:** A JavaScript schema builder for value parsing and validation.
* **Formik:** A small, battle-tested library for building forms in React.
* **Axios:** A promise-based HTTP client for the browser and Node.js.
* **Redux:** A predictable state container for JavaScript apps.

### Backend
* **Mongoose:** An elegant MongoDB object modeling for Node.js.
* **jsonwebtoken (JWT):** For secure authentication and authorization.
* **Express:** A fast, unopinionated, minimalist web framework for Node.js.
* **bcrypt:** A library to help you hash passwords.

---

## ⚙️ Project Phases & Current Progress

This project is divided into several phases to ensure a structured development process.

---

### 🔹 Phase 1: User Management & Authentication (✔️ Done)

**🎯 Goal:** Establish a secure authentication system and basic user flow.

**✅ Features:**
* ✔️ User Registration (with validation via Formik & Yup)
* ✔️ User Login (JWT-based authentication)
* ✔️ Password hashing (bcrypt)
* ✔️ Redux setup to manage auth state
* ✔️ Basic error handling (email taken, invalid password, etc.)
* [ ] Protected API endpoints (coming soon)

**🛠 Tech Used:**
* **Frontend:** Next.js (App Router), Formik, Yup, Redux, Axios
* **Backend:** Express, Mongoose, JWT, bcrypt

---

### 🔹 Phase 2: Public School Website (🏗️ Next Step)

**🎯 Goal:** Make your school website publicly accessible with information about your institution.

**✅ Features to Build:**
* [ ] Home Page: Introduction to the school
* [ ] About Us: History, mission, vision
* [ ] Photo Album: Gallery of school events
* [ ] Timeline: Milestones and achievements
* [ ] Contact Info / Map Integration
* [ ] News / Announcements

**📌 Bonus Ideas:**
* Testimonials from students/teachers
* Downloadable brochure or school prospectus

**🛠 Backend APIs:**
* Upload/fetch photo albums
* School info/timeline content management

---

### 🔹 Phase 3: Admission & Inquiry System

**🎯 Goal:** Allow prospective students and parents to apply or inquire online.

**✅ Features to Build:**
* [ ] Online Admission Form (Formik + Yup)
* [ ] Inquiry Submission Form
* [ ] Form data submission to backend
* [ ] Admin email notifications or logs
* [ ] Thank you/confirmation page

**🛠 Backend APIs:**
* Save admission forms to MongoDB
* Protect endpoints (JWT)
* CRUD APIs for admin to manage admissions

---

### 🔹 Phase 4: Smart Content Management via Secret Link (🔐 No Admin Login)

**🎯 Goal:** Enable content updates (like photos, timelines, announcements) without a full admin login, using a secure "magic link" or protected route approach.

**✅ Features to Build:**
* **Secret Editor Route:** `/edit-content?key=your_secret_key_here`
    * Accessible only with a special link or key
    * Hidden from the navigation and indexed pages
* **Content Management UI for:**
    * Editing timeline events
    * Uploading or deleting photo albums
    * Posting school announcements
* Update/Delete options with confirmation dialogs
* Save changes via Axios to backend routes
* Optional: "Draft" vs "Published" toggle for changes

---

## 🛠️ Getting Started

Instructions on how to set up and run the project locally will be added here.

---

## 🤝 Contributing

Guidelines for contributing to the project will be added here.

---

## 📄 License

Information about the project's license will be added here.