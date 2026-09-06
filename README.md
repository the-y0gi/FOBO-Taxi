# 🚕 Fobo Taxi System

A comprehensive, full-stack taxi booking and management platform built with modern technologies. This system provides seamless experiences for passengers, drivers, and administrators with real-time tracking, payment integration, and advanced analytics...

---

## 📋 Table of Contents....

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Configuration](#environment-configuration)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

---

## 🎯 Overview

Fobo Taxi System is a modern ride-hailing platform that connects passengers with drivers in real-time. The system includes:

- **User App** - Book rides, track drivers, manage payments
- **Driver App** - Accept rides, navigate routes, track earnings
- **Admin Dashboard** - Manage users, drivers, rides, and analytics

---

## ✨ Features

### 👤 User/Passenger Features

- 🔐 Secure authentication & authorization
- 📍 Real-time location tracking
- 🚖 Book rides with live driver tracking
- 💳 Multiple payment options (Razorpay, Stripe)
- 📜 Ride history and receipts
- ⭐ Rate and review drivers
- 👤 Profile management

### 🚗 Driver Features

- ✅ Accept/reject ride requests
- 🗺️ Navigation and route optimization
- 💰 Earnings tracking and analytics
- 📊 Trip history and statistics
- 🔔 Real-time notifications
- 📍 Live location sharing
- 👤 Driver profile management

### 👨‍💼 Admin Dashboard

- 📊 Comprehensive analytics and reports
- 👥 User management
- 🚗 Driver management and verification
- 🚕 Real-time ride monitoring
- 💵 Payment and transaction management
- ⚙️ System configuration
- 📈 Revenue tracking

### 🔧 Technical Features

- 🔄 Real-time updates with Socket.io
- 🗺️ Interactive maps with Leaflet
- 🔒 JWT-based authentication
- 💾 Redis caching (optional)
- 🛡️ Security with Helmet & Rate Limiting
- 📱 Responsive design
- ⚡ Optimized performance with compression
- 🎨 Beautiful UI with Tailwind CSS & Radix UI

---

## 🛠️ Tech Stack

### Frontend

| Technology           | Description                     |
| -------------------- | ------------------------------- |
| **Next.js 16**       | React framework with App Router |
| **TypeScript**       | Type-safe development           |
| **Tailwind CSS**     | Utility-first CSS framework     |
| **Radix UI**         | Accessible UI components        |
| **React Hook Form**  | Form management                 |
| **Zod**              | Schema validation               |
| **Leaflet**          | Interactive maps                |
| **Recharts**         | Data visualization              |
| **Framer Motion**    | Smooth animations               |
| **Axios**            | HTTP client                     |
| **Socket.io Client** | Real-time communication         |

### Backend

| Technology             | Description                           |
| ---------------------- | ------------------------------------- |
| **Node.js**            | JavaScript runtime                    |
| **Express.js 5**       | Web application framework             |
| **MongoDB**            | NoSQL database                        |
| **Mongoose**           | MongoDB ODM                           |
| **Socket.io**          | Real-time bidirectional communication |
| **JWT**                | Authentication tokens                 |
| **bcryptjs**           | Password hashing                      |
| **Razorpay & Stripe**  | Payment gateways                      |
| **Redis**              | Caching & session management          |
| **Helmet**             | Security middleware                   |
| **Express Rate Limit** | API rate limiting                     |
| **Multer**             | File upload handling                  |

---

## 📁 Project Structure

```
Fobo-taxi-system/
├── fobo-frontend/              # Next.js Frontend Application
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin dashboard pages
│   │   ├── driver/            # Driver interface pages
│   │   ├── user/              # User/passenger pages
│   │   ├── auth/              # Authentication pages
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable UI components
│   ├── contexts/              # React Context providers
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   ├── services/              # API service functions
│   ├── types/                 # TypeScript definitions
│   └── public/                # Static assets
│
└── fobo-backend/              # Node.js Backend API
    ├── config/                # Configuration files
    │   └── database.js        # MongoDB connection
    ├── controllers/           # Request handlers
    │   ├── admin/            # Admin controllers
    │   ├── authController.js
    │   ├── userController.js
    │   ├── driverController.js
    │   ├── rideController.js
    │   └── paymentController.js
    ├── models/               # Mongoose schemas
    │   ├── User.js
    │   ├── Driver.js
    │   ├── Ride.js
    │   ├── Payment.js
    │   ├── Admin.js
    │   ├── Config.js
    │   └── DriverTracking.js
    ├── routes/               # API routes
    │   ├── auth.js
    │   ├── user.js
    │   ├── driver.js
    │   ├── ride.js
    │   ├── payment.js
    │   └── admin.js
    ├── middleware/           # Custom middlewares
    ├── utils/                # Helper functions
    └── server.js             # Express app entry point
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** 20.x or higher
- **MongoDB** 8.x or higher (local or cloud)
- **npm/yarn/pnpm/bun** package manager
- **Redis** (optional, for caching)
- **Git**

---

### 🔧 Backend Setup

1. **Navigate to backend directory:**

```bash
cd fobo-backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file in `fobo-backend` directory:**

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key

# Client URL (Frontend)
CLIENT_URL=http://localhost:3000

# Payment Gateways
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

# Redis (Optional)
REDIS_URL=redis://localhost:6379
```

4. **Start the development server:**

```bash
npm run dev
```

The backend server will start on `http://localhost:5000`

5. **Alternative - Start production server:**

```bash
npm start
```

6. **Health Check:**
   Visit `http://localhost:5000/health` to verify the server is running.

---

### 🎨 Frontend Setup

1. **Navigate to frontend directory:**

```bash
cd fobo-frontend
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Create `.env.local` file in `fobo-frontend` directory:**

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Map Configuration (if using custom tile server)
NEXT_PUBLIC_MAP_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

# Socket.io URL
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

4. **Start the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

6. **Build for production:**

```bash
npm run build
npm run start
```

---

## ⚙️ Environment Configuration

### Backend Environment Variables

| Variable              | Description                          | Required |
| --------------------- | ------------------------------------ | -------- |
| `PORT`                | Server port number                   | Yes      |
| `NODE_ENV`            | Environment (development/production) | Yes      |
| `MONGO_URI`           | MongoDB connection string            | Yes      |
| `JWT_SECRET`          | Secret key for JWT tokens            | Yes      |
| `CLIENT_URL`          | Frontend application URL             | Yes      |
| `RAZORPAY_KEY_ID`     | Razorpay API key                     | Optional |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key                  | Optional |
| `STRIPE_SECRET_KEY`   | Stripe secret key                    | Optional |
| `REDIS_URL`           | Redis connection URL                 | Optional |

### Frontend Environment Variables

| Variable                   | Description          | Required |
| -------------------------- | -------------------- | -------- |
| `NEXT_PUBLIC_API_URL`      | Backend API base URL | Yes      |
| `NEXT_PUBLIC_SOCKET_URL`   | Socket.io server URL | Yes      |
| `NEXT_PUBLIC_MAP_TILE_URL` | Map tile server URL  | Optional |

---

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register new user |
| POST   | `/auth/login`    | User login        |
| POST   | `/auth/logout`   | User logout       |
| GET    | `/auth/me`       | Get current user  |

### User Endpoints

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | `/user/profile` | Get user profile        |
| PUT    | `/user/profile` | Update user profile     |
| GET    | `/user/rides`   | Get user's ride history |

### Driver Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | `/driver/register` | Register as driver     |
| GET    | `/driver/profile`  | Get driver profile     |
| PUT    | `/driver/profile`  | Update driver profile  |
| GET    | `/driver/rides`    | Get driver's trips     |
| PUT    | `/driver/location` | Update driver location |
| GET    | `/driver/earnings` | Get earnings summary   |

### Ride Endpoints

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | `/rides/request`      | Request a new ride     |
| GET    | `/rides/:id`          | Get ride details       |
| PUT    | `/rides/:id/accept`   | Accept a ride (driver) |
| PUT    | `/rides/:id/start`    | Start a ride           |
| PUT    | `/rides/:id/complete` | Complete a ride        |
| PUT    | `/rides/:id/cancel`   | Cancel a ride          |
| GET    | `/rides/active`       | Get active rides       |

### Payment Endpoints

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| POST   | `/payments/create`  | Create payment      |
| POST   | `/payments/verify`  | Verify payment      |
| GET    | `/payments/history` | Get payment history |

### Admin Endpoints

| Method | Endpoint                   | Description          |
| ------ | -------------------------- | -------------------- |
| GET    | `/admin/users`             | Get all users        |
| GET    | `/admin/drivers`           | Get all drivers      |
| GET    | `/admin/rides`             | Get all rides        |
| GET    | `/admin/analytics`         | Get system analytics |
| PUT    | `/admin/driver/:id/verify` | Verify driver        |
| DELETE | `/admin/user/:id`          | Delete user          |

---

## 💻 Development

### Available Scripts

#### Backend Scripts

```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests
```

#### Frontend Scripts

```bash
npm run dev      # Start Next.js development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Development Guidelines

1. **Code Style:**
   - Follow TypeScript/JavaScript best practices
   - Use ESLint for code linting
   - Maintain consistent naming conventions

2. **Git Workflow:**
   - Create feature branches from `main`
   - Write meaningful commit messages
   - Submit pull requests for review

3. **Testing:**
   - Write unit tests for new features
   - Test API endpoints thoroughly
   - Ensure responsive design on all devices

4. **Security:**
   - Never commit `.env` files
   - Use environment variables for sensitive data
   - Validate all user inputs
   - Implement proper error handling

---

## 🗺️ Real-time Features

### Socket.io Events

#### Client → Server

- `join-room` - Join user/driver room
- `update-location` - Update driver location
- `request-ride` - Request a new ride
- `accept-ride` - Driver accepts ride
- `cancel-ride` - Cancel ride request

#### Server → Client

- `ride-requested` - New ride available (to drivers)
- `ride-accepted` - Ride accepted by driver
- `location-update` - Driver location update
- `ride-started` - Ride started notification
- `ride-completed` - Ride completion notification

---


#### Environment Setup

Make sure to configure environment variables in your deployment platform.

---

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcryptjs
- ✅ Helmet.js for securing HTTP headers
- ✅ CORS configuration
- ✅ Rate limiting to prevent abuse
- ✅ Input validation with Zod
- ✅ SQL injection prevention (MongoDB)
- ✅ XSS protection

---




## 📄 License

This project is proprietary and confidential.

---



## 📈 Future Enhancements

- [ ] Push notifications (Firebase/OneSignal)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Driver rating system improvements
- [ ] Ride scheduling feature
- [ ] Loyalty program
- [ ] In-app chat support
- [ ] AI-based price optimization

---

**Made ❤️ by Yogesh**

---

## 🆘 Troubleshooting

### Common Issues

**Backend not connecting to MongoDB:**

- Check your `MONGO_URI` in `.env`
- Ensure MongoDB is running
- Verify network connectivity

**Frontend API calls failing:**

- Verify `NEXT_PUBLIC_API_URL` is correct
- Check if backend server is running
- Check CORS settings in backend

**Socket.io not working:**

- Ensure both frontend and backend are running
- Check `NEXT_PUBLIC_SOCKET_URL` configuration
- Verify Socket.io server is initialized

**Maps not loading:**

- Check Leaflet CSS is imported
- Verify map tile URL is accessible
- Check browser console for errors

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Socket.io Documentation](https://socket.io/docs/v4/)
- [Leaflet Tutorials](https://leafletjs.com/examples.html)
- [Razorpay Integration](https://razorpay.com/docs/)

---
