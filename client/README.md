# Gautam High School Management System (SchoolSphere)

---

## Overview

Gautam High School Management System (SchoolSphere) is a comprehensive MERN stack application designed to serve as the central digital platform for **Gautam High School**. It aims to provide prospective and current members of the school community with essential information, including school details, timelines, photo albums, admission procedures, and more. This system will enhance transparency, streamline communication, and offer a rich digital experience of Gautam High School's environment and offerings.

## Project Status

This project is currently under active development. We have completed the foundational **user authentication** functionalities on both the frontend and backend.

## Technologies Used

---

### Frontend

* **Next.js**: React framework for building fast and scalable web applications.
* **App Router**: Next.js's new routing paradigm for building modern web experiences.
* **Yup**: JavaScript schema builder for value parsing and validation.
* **Formik**: Helper for building forms in React, simplifying form state management.
* **Axios**: Promise-based HTTP client for making API requests.
* **Redux**: Predictable state container for JavaScript apps.

### Backend

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
* **Mongoose**: MongoDB object data modeling (ODM) for Node.js.
* **Bcrypt**: Library for hashing passwords.
* **JSON Web Token (JWT)**: Compact, URL-safe means of representing claims to be transferred between two parties.

### Database

* **MongoDB**: NoSQL database for flexible and scalable data storage.

## Current Progress (Phase 1)

---

### Frontend

* **User Authentication**:
    * **Login Page**: Implemented with form validation (using Formik and Yup).
    * **Registration Page**: Implemented with form validation (using Formik and Yup).

### Backend

* **User Authentication API**:
    * **`POST /api/users/register`**:
        * Checks if the email already exists.
        * Hashes the user's password using `bcrypt` (10 salt rounds).
        * Creates a new user record in the database.
    * **`POST /api/users/login`**:
        * Validates user credentials (email and password).
        * Compares the provided password with the hashed password in the database using `bcrypt.compare()`.
        * Generates a JSON Web Token (JWT) upon successful login for authenticated sessions (expires in 1 hour).
    * **`GET /api/users`**:
        * Retrieves all user data from the database. (Note: This endpoint is currently unprotected and for development/testing purposes. It will be secured in future phases.)

## Installation and Setup

---

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* MongoDB (locally installed or a cloud service like MongoDB Atlas)

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/gautam-high-school-system.git](https://github.com/your-username/gautam-high-school-system.git) # Update with your repo URL
    cd gautam-high-school-system/backend # (or wherever your backend code resides)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file in the `backend` directory** and add the following:
    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key # Use a strong, random key
    ```
    *Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., `mongodb://localhost:27017/school_db` or your MongoDB Atlas connection string).*
    *Replace `your_super_secret_jwt_key` with a long, random string. The one in your code (`33ceecfc3c914cb6dee77a8c16d08211caf46cfb1aa0b9372f24e39fbaaa1fca31d1a7ae7938579f7ed157636babf812ac42468d431128f7f3098c51a5a4a69a`) is too long for a secret; typically, it's shorter and more concise.*
4.  **Run the backend server:**
    ```bash
    npm start # Or 'node server.js' depending on your entry point
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend # (or wherever your frontend code resides)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env.local` file in the `frontend` directory** and add the following:
    ```
    NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api # Or your backend URL
    ```
4.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```

## Project Phases & Future Development

---

This project will be developed in several phases to ensure a robust and comprehensive system.

### 🔹 Phase 1: User Management & Authentication (✔️ In Progress / Done)

* **🎯 Goal**: Establish a secure authentication system and basic user flow.
* **✅ Features**:
    * [ ] User Registration (with validation via Formik & Yup)
    * [ ] User Login (JWT-based authentication)
    * [ ] Password hashing (bcrypt)
    * [ ] Redux setup to manage auth state
    * [ ] Protected API endpoints (coming soon)
    * [ ] Basic error handling (email taken, invalid password, etc.)
* **🛠 Tech Used**:
    * **Frontend**: Next.js (App Router), Formik, Yup, Redux, Axios
    * **Backend**: Express, Mongoose, JWT, bcrypt

### 🔹 Phase 2: Public School Website (🏗️ Next Step)

* **🎯 Goal**: Make **Gautam High School's** website publicly accessible with information about the institution.
* **✅ Features to Build**:
    * [ ] Home Page: Introduction to the school
    * [ ] About Us: History, mission, vision
    * [ ] Photo Album: Gallery of school events
    * [ ] Timeline: Milestones and achievements
    * [ ] Contact Info / Map Integration
    * [ ] News / Announcements
* **📌 Bonus Ideas**:
    * [ ] Testimonials from students/teachers
    * [ ] Downloadable brochure or school prospectus
* **🛠 Backend APIs**:
    * [ ] Upload/fetch photo albums
    * [ ] School info/timeline content management

### 🔹 Phase 3: Admission & Inquiry System

* **🎯 Goal**: Allow prospective students and parents to apply or inquire online.
* **✅ Features to Build**:
    * [ ] Online Admission Form (Formik + Yup)
    * [ ] Inquiry Submission Form
    * [ ] Form data submission to backend
    * [ ] Admin email notifications or logs
    * [ ] Thank you/confirmation page
* **🛠 Backend APIs**:
    * [ ] Save admission forms to MongoDB
    * [ ] Protect endpoints (JWT)
    * [ ] CRUD APIs for admin to manage admissions

### 🔹 Phase 4: Student & Staff Portals (Future)

* **🎯 Goal**: Provide dedicated dashboards and functionalities for students and staff.
* **✅ Features to Build**:
    * [ ] Student portal (e.g., academic progress, notices)
    * [ ] Staff portal (e.g., attendance, announcements)
* **🛠 Backend APIs**:
    * [ ] Manage student records, staff details, academic data.
    * [ ] Implement Role-Based Access Control (RBAC).

### 🔹 Phase 5: Advanced Features & Refinements (Future)

* **🎯 Goal**: Enhance the system with additional functionalities and optimize performance.
* **✅ Features to Build**:
    * [ ] Communication Tools: Internal messaging, notice board.
    * [ ] Fee Management: Online fee payment integration.
    * [ ] Reporting & Analytics: Dashboards for school administration.
    * [ ] Performance Optimization & Security Hardening.

---

## Contributing

We welcome contributions! If you have suggestions or want to contribute, please feel free to fork the repository and create a pull request, or open an issue.

## License

---

[Specify your license here, e.g., MIT License]

## Contact

---

[Your Name/Email Address/GitHub Profile Link]