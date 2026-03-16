# Moji Realtime Chat App

Moji is a realtime messaging web application that allows users to communicate instantly through a modern web interface.  
The application provides user authentication and realtime message exchange using web socket technology.

## Overview

This project demonstrates how to build a full stack realtime chat application using a modern JavaScript stack.  
Users can create accounts, log in securely, and send messages that appear instantly without refreshing the page.

The project is separated into a frontend client and a backend server.

## Features

- User authentication (Sign Up / Sign In)
- Realtime messaging
- Conversation based chat interface
- Protected routes for authenticated users
- Responsive user interface
- Toast notifications for user actions

## Tech Stack

### Frontend

- React
- React Router
- TailwindCSS
- Axios

### Backend

- Node.js
- Express.js
- Socket.io
- MongoDB

## Project Structure

```
Moji
├── backend/
│   └── src/
│       ├── controllers/
│       ├── libs/
│       ├── middlewares/
│       ├── models/
│       ├── routes/
│       ├── socket/
│       └── utils/
│
└── frontend/
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        ├── hooks/
        ├── lib/
        ├── pages/
        ├── services/
        ├── stores/
        └── types/
```

## Installation

Clone the repository

```
git clone https://github.com/Jimmy-02/Moji.git
```

Move into the project directory

```
cd Moji
```

### Backend setup

```
cd backend
npm install
npm run dev
```

### Frontend setup

```
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder and configure the following variables

```
PORT=5000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

## Deployment

Frontend can be deployed using Vercel.

Backend can be deployed using Render.

## Version

v1.0.0  
Initial release with core realtime chat functionality and authentication system.

## Future Improvements

- Online and offline user status
- Message reactions
- Image and file sharing
- Read receipts
- Group chat support

## License

This project is for educational purposes.