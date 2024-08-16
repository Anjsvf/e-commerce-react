<H2>FASHIONWIX</h2>
 is a comprehensive e-commerce platform designed for online fashion shopping. The site offers a sleek, modern design optimized for various devices, enabling users to easily browse and purchase clothing and accessories. The platform features dedicated sections for men, women, and children, a login page for user accounts, and a shopping cart for managing orders.

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
   git clone https://github.com/Anjsvf/e-commerce-react
   cd e-commerce-react
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
FASHIONWIX - Documentation
Overview


Project URL: e-commerce-react-frontend.onrender.com

Features
1. Home Page
New Collection Banner: Highlights the latest fashion collections for all audiences.
Trending Products: Displays popular items with discounted prices.
2. User Authentication
Login/Signup Page: Secure user authentication allowing users to log in or sign up.
Persistent Login: Users remain logged in across sessions unless they choose to log out.
3. Product Sections
Men's Section: A variety of clothing and accessories specifically for men.
Women's Section: Latest trends and styles in women's fashion.
Children's Section: Fashionable items for children of all ages.
Featured Offers: Exclusive offers on best-selling products.
4. Shopping Cart
Add to Cart: Users can easily add items to their cart from any section.
View Cart: A cart icon at the top right corner gives quick access to view and manage items.
Checkout Process: A streamlined process for reviewing the cart and proceeding to payment.
5. Responsive Design
The site is fully responsive, providing an optimal viewing experience across desktops, tablets, and mobile devices.
Screenshots
1. Home Page
Showcases the latest collection with a prominent banner.

2. Trending Products
Displays trending items with discount tags.

3. Shopping Cart
Displays items added to the cart and provides options to proceed to checkout.

Installation
Prerequisites
Node.js and npm installed.
Git for version control.
Steps
Clone the Repository:

bash
Copiar código
git clone https://github.com/yourusername/fashionwix.git
cd fashionwix
Install Dependencies:

bash
Copiar código
npm install
Start the Development Server:

bash
Copiar código
npm start
Environment Configuration
Ensure the following environment variables are set up correctly:

REACT_APP_API_URL: URL of the backend API 
REACT_APP_GOOGLE_ANALYTICS: Google Analytics ID if tracking is needed.
Deployment
Build the Application:

bash
Copiar código
npm run build
Deploy to Render:
Follow the instructions on Render.com for deploying a static site.

How to Contribute
Reporting Issues
Use the GitHub issues section to report bugs or suggest improvements.
Adding New Features
Fork the repository, make your changes, and submit a pull request with a detailed description of what was added or modified.
License
This project is licensed under the MIT License. See the LICENSE file for more details.