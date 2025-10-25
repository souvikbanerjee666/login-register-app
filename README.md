# Full-Stack Authentication App

A complete authentication system built with React, Node.js, Express, MongoDB, and Multer for file uploads.

## Features

- ✅ User Registration with validation
- ✅ User Login with authentication
- ✅ Profile picture upload using Multer
- ✅ Dashboard with user profile
- ✅ Password hashing with bcrypt
- ✅ Modern UI with Tailwind CSS
- ✅ Loading states and error handling

## Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Multer** - File upload
- **bcrypt** - Password hashing
- **CORS** - Cross-origin requests

## Project Structure

```
chai-react-practice/
├── backend/
│   ├── config/
│   │   └── dbConnect.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── uploadController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── uploadRoutes.js
│   ├── public/uploads/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserRegister.jsx
│   │   │   ├── UserLogin.jsx
│   │   │   ├── ProfileSetup.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── Router1.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
   MONGO_URL=mongodb://localhost:27017/form-validation
   PORT=4000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### File Upload
- `POST /api/upload-profile/:userId` - Upload profile picture

## Usage

1. **Register**: Create a new account with full name, username, email, and password
2. **Login**: Sign in with username and password
3. **Profile Setup**: Upload a profile picture or skip
4. **Dashboard**: View profile information and logout

## Features in Detail

### User Registration
- Form validation (password confirmation, length requirements)
- Username and email uniqueness check
- Password hashing before storage
- Success/error feedback with loading states

### User Login
- Username/password authentication
- JWT token support (ready for implementation)
- Automatic redirect to profile setup

### Profile Picture Upload
- File type validation (images only)
- File size limit (5MB)
- Image preview before upload
- Multer handling with unique filenames

### Dashboard
- User profile display
- Profile picture rendering
- Logout functionality
- Protected route (login required)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for learning purposes.