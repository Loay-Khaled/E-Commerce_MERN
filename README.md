# E-Commerce MERN Stack Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript. This project provides a complete online shopping experience with user authentication, product browsing, cart management, and order processing.

## 🚀 Features

### Backend
- **User Authentication**: Secure registration and login with JWT tokens and bcrypt password hashing
- **Product Management**: CRUD operations for products with automatic database seeding
- **Shopping Cart**: Add, remove, and update items in the cart
- **Order Processing**: Complete checkout and order history tracking
- **RESTful API**: Clean and organized API routes
- **Type Safety**: Built with TypeScript for enhanced code quality

### Frontend
- **Modern UI**: Built with React 18 and Material-UI (MUI)
- **Responsive Design**: Mobile-friendly interface with Material-UI components
- **State Management**: Context API for authentication and cart management
- **Protected Routes**: Secure pages requiring authentication
- **React Router**: Seamless navigation between pages
- **Type Safety**: TypeScript for reliable frontend development

## 📋 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) & bcrypt
- **Language**: TypeScript
- **Dev Tools**: Nodemon, ts-node

### Frontend
- **Library**: React 18
- **Build Tool**: Vite
- **UI Framework**: Material-UI (MUI)
- **Routing**: React Router DOM
- **Language**: TypeScript
- **Styling**: Emotion (CSS-in-JS)

## 📁 Project Structure

```
E-Commerce_MERN/
├── backend/
│   ├── src/
│   │   ├── models/           # Database models
│   │   │   ├── userModel.ts
│   │   │   ├── productModel.ts
│   │   │   ├── cartModel.ts
│   │   │   └── orderModel.ts
│   │   ├── routes/           # API routes
│   │   │   ├── userRoute.ts
│   │   │   ├── productRoute.ts
│   │   │   └── cartRoute.ts
│   │   ├── services/         # Business logic
│   │   │   ├── userService.ts
│   │   │   ├── productService.ts
│   │   │   └── cartService.ts
│   │   ├── middlewares/      # Custom middlewares
│   │   │   └── validateJWT.ts
│   │   ├── types/            # TypeScript types
│   │   │   └── extendedRequest.ts
│   │   └── index.ts          # Entry point
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── components/       # Reusable components
    │   │   ├── Navbar.tsx
    │   │   ├── ProductCard.tsx
    │   │   └── ProtectedRoute.tsx
    │   ├── pages/            # Page components
    │   │   ├── HomePage.tsx
    │   │   ├── LoginPage.tsx
    │   │   ├── RegisterPage.tsx
    │   │   ├── CartPage.tsx
    │   │   ├── CheckoutPage.tsx
    │   │   ├── MyOrdersPage.tsx
    │   │   └── OrderSuccessPage.tsx
    │   ├── context/          # React Context
    │   │   ├── Auth/
    │   │   │   ├── AuthContext.ts
    │   │   │   └── AuthProvider.tsx
    │   │   └── Cart/
    │   │       ├── CartContext.ts
    │   │       └── CartProvider.tsx
    │   ├── types/            # TypeScript types
    │   │   ├── CartItem.ts
    │   │   └── Product.ts
    │   ├── constants/        # Constants
    │   │   └── baseUrl.ts
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── vite.config.ts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Loay-Khaled/E-Commerce_MERN.git
cd E-Commerce_MERN
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file and add your credentials
# JWT_SECRET=your_jwt_secret_key
# DATABASE_URL=your_mongodb_connection_string
```

**Environment Variables:**
- `JWT_SECRET`: Secret key for JWT token generation
- `DATABASE_URL`: MongoDB connection string (e.g., `mongodb://localhost:27017/ecommerce` or MongoDB Atlas URL)

```bash
# Start the backend server
npm run dev
```

The backend server will run on `http://localhost:3001`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port)

## 🚦 Usage

1. **Register**: Create a new account at `/register`
2. **Login**: Sign in with your credentials at `/login`
3. **Browse Products**: View available products on the home page
4. **Add to Cart**: Click on products to add them to your cart
5. **View Cart**: Check your cart at `/cart`
6. **Checkout**: Complete your purchase at `/checkout`
7. **Order History**: View your past orders at `/my-orders`

## 🔐 API Endpoints

### User Routes (`/user`)
- `POST /register` - Register a new user
- `POST /login` - Login and receive JWT token

### Product Routes (`/product`)
- `GET /` - Get all products
- `GET /:id` - Get product by ID

### Cart Routes (`/cart`)
- `GET /` - Get user's cart (requires authentication)
- `POST /items` - Add item to cart (requires authentication)
- `PUT /items` - Update cart item quantity (requires authentication)
- `DELETE /items/:productId` - Remove item from cart (requires authentication)
- `POST /checkout` - Checkout and create order (requires authentication)

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication. After login, the token is stored and sent with protected route requests via the `Authorization` header.

Protected routes require the `validateJWT` middleware on the backend, which verifies the token before allowing access.

## 🎨 UI Components

The frontend uses Material-UI components for a modern and responsive design:
- `Navbar` - Navigation bar with authentication status
- `ProductCard` - Display product information
- `ProtectedRoute` - Wrapper for authenticated routes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

## 👤 Author

**Loay Khaled**

- GitHub: [@Loay-Khaled](https://github.com/Loay-Khaled)

## 🙏 Acknowledgments

- Material-UI for the beautiful component library
- MongoDB for the database solution
- Express.js for the robust backend framework
- React for the powerful frontend library
- Vite for the blazing fast build tool

---

**Note**: Make sure to update the `.env` file with your actual credentials before running the application. Never commit sensitive information like API keys or database credentials to version control.
