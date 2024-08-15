
Here's a brief summary of the backend:

This backend API for an e-commerce application is built using Node.js, Express, and MongoDB. It provides essential functionalities for managing products, user authentication, and shopping cart operations.

Key features include:

User Authentication: Users can sign up, log in, and receive a JWT token for secure access to protected routes.
Product Management: Allows adding, removing, and retrieving product information, including handling image uploads.
Shopping Cart Operations: Users can add items to their cart, remove them, and retrieve their cart's content.
Middleware: A custom middleware is used to verify user authentication with JWT.
The backend is configured to serve images statically and connect to MongoDB for data storage. The server is set to run on port 4000, with a default setup for environment variables.

# E-commerce Backend API

This repository contains the backend API for an e-commerce application built with Node.js, Express, and MongoDB. It includes endpoints for managing products, user authentication, shopping cart operations, and more.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/e-commerce-backend.git
   cd e-commerce-backend
Install dependencies:

bash
Copiar código
npm install
Set up environment variables:

Create a .env file in the root directory with the following variables:

plaintext
Copiar código
MONGO_URL=your_mongodb_connection_string
PORT=4000
Replace your_mongodb_connection_string with your actual MongoDB connection string.

Start the server:

bash
Copiar código
npm start
The server will run on http://localhost:4000 by default.

API Endpoints
Authentication
POST /signup: Register a new user.
POST /login: User login and token generation.
Products
POST /addproduct: Add a new product.
POST /removeproduct: Remove a product.
GET /allproducts: Get all products.
GET /newcollections: Get latest product collections.
GET /popularinwomen: Get popular products in women's category.
Cart Operations
POST /addtocart: Add item to user's shopping cart.
POST /removefromcart: Remove item from user's shopping cart.
POST /getcart: Get user's current shopping cart data.
Image Upload
POST /upload: Upload product images.
Middleware
fetchUser: Middleware to verify and fetch user details using JWT token.
Libraries Used
mongoose: MongoDB object modeling tool.
multer: Middleware for handling file uploads.
cors: Middleware for enabling CORS.
jsonwebtoken: JSON Web Token implementation.
express: Web framework for Node.js.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
