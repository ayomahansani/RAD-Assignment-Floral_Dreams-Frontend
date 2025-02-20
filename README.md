# 🌸 Floral Dreams - Flower Management System 🌸

Floral Dreams is a comprehensive flower management system that simplifies and streamlines the process of managing customers, suppliers, orders, and inventory for flowers. With a user-friendly interface and robust backend, it provides essential functionalities like CRUD operations for customers, flowers, and suppliers, as well as order creation and user authentication.

---

## 💻 Technology Stack
### Frontend
- **Build Tool**: Vite for fast development and optimized builds.
- **Languages**: JavaScript/TypeScript, HTML (JSX/TSX).
- **Framework**: React with Redux for state management.
- **Styling**: Tailwind CSS for modern, responsive designs..
- **Image Handling**: Form Data for handling image uploads and retrieval.
- **Components Library**: MUI for reusable UI components, React Toastify for notifications.
- **Icons**: Lucide-react for versatile iconography.
- **Data Handling**: AXIOS and Fetch API for smooth client-server communication.

### Backend
- **Framework**: Node.js with Express for RESTful APIs.
- **Database**: MySQL using Prisma ORM for structured and scalable data management.
- **Authentication**: JSON Web Tokens (JWT) for secure user login and registration.
- **Environment Configuration**: dotenv for managing environment variables.
- **Cross-Origin Resource Sharing (CORS)**: Configured using the cors library to enable secure client-server communication.
- **Image Handling**: Multer for handling image uploads and retrieval.

---

## ✨ Key Features
### Core Modules
- **Customer Management**: Manage customer details (Create, Read, Update, Delete).
- **Flower Tracking**: Inventory management with search and CRUD capabilities.
- **Supplier Management**: CRUD functionality for managing suppliers and their supplied flowers.
- **Order Tracking**: Add and view order details, including decoration and wrapping charges.
- **User Management**: Secure login and registration for users.

---

## 📋 Setup Instructions
### Requirements
- Node.js.
- MySQL Server.

### Steps to Deploy
### Frontend
1. Clone the Frontend Repository:
    ```bash
    git clone https://github.com/ayomahansani/AAD-Crop_Monitoring_System_Backend_SpringBoot.git
    cd floral-dreams-frontend
    ```
2. Install Dependencies:
    ```bash
    npm install
    ```
3. Start the Frontend Application:
    ```bash
    npm start
    ```
4. Access the application at:
   ```
    http://localhost:5173
    ```

### Backend
1. Clone the Backend Repository:
    ```bash
    git clone https://github.com/ayomahansani/AAD-Crop_Monitoring_System_Backend_SpringBoot.git
    cd floral-dreams-backend
    ```
2. Install Dependencies:

   ---
   Ensure you have Node.js installed. Then install the required packages using npm:
    ```bash
    npm install
    ```
3. Set Up Environment Variables:

   ---
   Create a .env file in the backend directory and set up your environment variables (e.g., database URL, JWT secret):
     ```
     DATABASE_URL="mysql://username:password@localhost:3306/flowerShop"
     SECRET_KEY=your_secret_key
     REFRESH_TOKEN=your_refresh_token
     ```
4. Run the Prisma migrations to set up the database:
    ```bash
    npx prisma migrate dev
    ```
5. Start the Backend Server:
    ```bash
    npm start
    ```
---

## 🗄️ Database Design
The Floral Dreams system ensures data integrity and efficiency with its relational database model:

---
### Relationships
- **Flower and Suppliers**: Many-to-Many relationship.
- **Flower and Order**: Many-to-Many relationship.

### Tables
- **Customer**:
    - Attributes: customer_id, first_name, last_name, phone, email, address, gender.
- **Flower**:
    - Attributes: flower_code, name, image, size, color, unit_price, qty_on_hand.
- **Order**:
    - Attributes: order_id, customer_email, order_date, wrapping_charges, decoration_charges, sub_total, discount, total_amount, paid_amount, balance.
    - Relationships: Includes OrderDetails for itemized tracking.
- **Supplier**:
    - Attributes: supplier_id, name, phone, email, address.
    - Relationships: Includes SuppliersAndFlowersDetails to track supplied flowers.
- **User**:
    - Attributes: username, password, first_name, last_name

---

## 📌 API Highlights
### Base URL
```
http://localhost:3000/
```

### Sample Endpoints
- **Customer**:

  `GET /customer/view` : Retrieve all customers.

  `POST /customer/add` : Add a new customer.

  `PUT /customer/update/:id` : Update customer details.

  `DELETE /customer/delete/:id` : Remove a customer.

- **Flower**:

  `GET /flower/view` : Retrieve all flowers.

  `POST /flower/add` : Add a new flower.

  `PUT /flower/update/:id` : Update flower details.

  `DELETE /flower/delete/:id` : Remove a flower.

- **Supplier**:

  `GET /supplier/view` : Retrieve all suppliers.

  `POST /supplier/add` : Add a new supplier.

  `PUT /supplier/update/:id` : Update supplier details.

  `DELETE /supplier/delete/:id` : Remove a supplier.

- **Order**:

  `GET /order/view` : Retrieve all orders.

  `POST /order/add` : Place a new order.

- **User**:

  `POST /auth/register` : Register a new user.

  `POST /auth/login` : Log in to the system.

---

## 📜 License
This project is distributed under the **MIT License**. See the LICENSE file in Backend for additional information.

---

## 💌 Acknowledgments
Special thanks to mentors, peers, and open-source contributors who inspired the development of Floral Dreams.

**Floral Dreams - Your one-stop solution for managing flowers and beyond.**

