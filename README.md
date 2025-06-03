# E-Commerce Platform Backend

This project is a backend service for a simple e-commerce platform, providing APIs for user authentication, product management, cart management, and order placement.


## Features

### 1. User Authentication and Registration
- **POST /signup**: Register a new user.
- **POST /login**: Log in a user and return a JWT token.
- **GET /**: Fetch all user's.
- **GET /**: Get current user details.
- **PUT /**: Update current user's profile.
- **DELETE /**: Delete current user's profile.

### 2. Product Management
- **GET /products**: Retrieve a list of products with support for search and filtering.
- **GET /products/**: Retrieve all products.
- **GET /products/:id**: Get details of a specific product.
- **POST /products**: Add a new product (admin-only route).
- **PUT /products/:id**: Update an existing product (admin-only route).
- **DELETE /products/:id**: Delete a product (admin-only route).

### 3. Cart Management
- **POST /cart**: Add an item to the cart.
- **GET /cart**: Retrieve cart items for a user.
- **PUT /cart/:itemId**: Update the quantity of an item in the cart.
- **DELETE /cart/:itemId**: Remove an item from the cart.

### 4. Order Placement
- **POST /orders**: Place an order.
- **GET /orders**: Retrieve all orders for the logged-in user.
- **GET /orders/:id**: Get details of a specific order.

---

## API Endpoints


### User Management Routes

| Method | Endpoint          | Description                                | Authentication |
|--------|-------------------|--------------------------------------------|----------------|
| POST   | `/api/users/signup` | Register a new user                       | No             |
| POST   | `/api/users/login`  | Login user and get JWT token              | No             |
| GET    | `/api/users`        | Get all users                | No            |
| GET    | `/api/users/me`     | Get current user details                  | Yes            |
| PUT    | `/api/users/`       | Update current user's profile             | Yes            |
| DELETE | `/api/users/`       | Delete current user's profile             | Yes            |



### Product Routes

| Method | Endpoint            | Description                         | Authentication | Admin Only |
|--------|---------------------|-------------------------------------|----------------|------------|
| POST   | `/api/products`      | Add a new product                  | Yes            | Yes        |
| GET    | `/api/products`      | Get all products                   | No             | No         |
| GET    | `/api/products/:id`  | Get a specific product by ID       | No             | No         |
| PUT    | `/api/products/:id`  | Update a product by ID             | Yes            | Yes        |
| DELETE | `/api/products/:id`  | Delete a product by ID             | Yes            | Yes        |


### Cart Routes

| Method | Endpoint         | Description                                    | Authentication |
|--------|------------------|------------------------------------------------|----------------|
| GET    | `/api/cart`      | Retrieve all items in the cart for the user    | Yes            |
| POST   | `/api/cart`      | Add a product to the user's cart               | Yes            |
| PUT | `/api/cart/:itemId` | Update the quantity of an item in the cart.  | Yes            |
| DELETE | `/api/cart/:itemId` | Remove a specific item from the user's cart   | Yes            |


## Setup

1. Clone the repository:
   ```bash
   git clone <https://github.com/surajmendhe5573/BuyNow-Platform-Backend.git>
   cd <BuyNow-Platform-Backend>


## Getting Started

**Install dependencies and start the server:**

```bash
npm install
npm start
```

### Prerequisites
- Node.js and npm installed
- MongoDB installed

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Password Hashing**: bcrypt
- **API Testing**: Postman
- **Version Control**: Git and GitHub
## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
# Port
PORT=5000

# Database Connection
MONGO_URI=mongodb://localhost:27017/BuyNow-Platform-Backend

# Secret Key
JWT_SECRET= secretKey

```


## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


