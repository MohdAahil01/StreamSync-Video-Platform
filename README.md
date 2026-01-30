# StreamSync

StreamSync is a modern, real-time video conferencing application designed to bring people together. Built with a focus on user experience and performance, it offers high-quality video calling, real-time chat, and screen sharing capabilities wrapped in a sleek, dark-themed interface.

## 🚀 Features

*   **Real-Time Video & Audio:** Seamless video conferencing powered by WebRTC and Socket.io.
*   **Screen Sharing:** Collaborate effectively by sharing your screen with meeting participants.
*   **In-Meeting Chat:** Send instant messages to participants without interrupting the video flow.
*   **Secure Authentication:** User registration and login system to secure your account.
*   **Meeting History:** Keep track of your past meetings and easily rejoin or reference them.
*   **Modern Dark UI:** A professional and aesthetically pleasing dark mode interface using Material UI.
*   **Responsive Design:** Fully responsive layout ensuring a great experience on different screen sizes.

## 🛠️ Tech Stack

### Frontend
*   **React:** Javascript library for building user interfaces.
*   **Material UI (MUI):** React component library for faster and easier web development.
*   **Socket.io Client:** For real-time bidirectional event-based communication.
*   **React Router:** For declarative routing in the application.

### Backend
*   **Node.js & Express:** Robust backend runtime and framework.
*   **Socket.io:** Enables real-time, bidirectional authentication.
*   **MongoDB & Mongoose:** NoSQL database for flexible data modeling.
*   **Bcrypt:** Library to help you hash passwords.

## 📋 Prerequisites

Before running the project, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v14 or higher recommended)
*   [MongoDB](https://www.mongodb.com/) (Local instance or Atlas connection)

## ⚙️ Installation & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/StreamSync.git
cd StreamSync
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Start the backend server:
```bash
# For development (using nodemon)
npm run dev

# Standard start
npm start
```
*The backend server typically runs on port `8000`.*

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the React development server:
```bash
npm start
```
*The application should now be running at `http://localhost:3000`.*

## 🔒 Configuration

*   **Backend:** Ensure your MongoDB is running locally or provide a connection string if required in the backend configuration.
*   **Frontend:** The API endpoint is configured in `frontend/src/environment.js`. By default, it is set to communicate with the local backend.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [ISC License](LICENSE).
