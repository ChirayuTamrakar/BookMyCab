🚕 Book My Ride

Book My Ride is a full-stack ride-booking web application that connects passengers with nearby drivers in real time. It provides live location tracking, accurate ETA and pricing calculations, and instant ride updates using WebSockets.

Built to simulate real-world ride-hailing platforms like Uber/Ola, with a focus on scalability, security, and real-time communication.

✨ Features

User and Driver authentication with secure JWT-based authorization

Real-time ride booking and driver matching using Socket.IO

Live location tracking with Google Maps

Accurate ETA and distance-based fare calculation using Google Distance Matrix API

Real-time ride status updates (requested, accepted, ongoing, completed)

Driver availability management

User profile and booking history management

🛠 Tech Stack

Frontend

React.js

Tailwind CSS

Axios

Backend

Node.js

Express.js

Socket.IO

Database

MongoDB (Mongoose)

APIs & Services

Google Maps API

Google Distance Matrix API

Authentication & Security

JWT (JSON Web Tokens)

bcrypt (password hashing)

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/ChirayuTamrakar/BookMyCab.git
cd BookMyCab

2. Install dependencies

For backend:

cd backend
npm install


For frontend:

cd frontend
npm install

3. Environment Variables

Create a .env file in the backend directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key


⚠️ Never push .env files to GitHub.

4. Run the application

Start backend:

npm run dev


Start frontend:

npm start


The app will run locally on:

Frontend: http://localhost:3000

Backend: http://localhost:5000

🧠 Project Architecture

RESTful APIs handle authentication, bookings, users, and drivers

Socket.IO enables real-time communication for ride matching and updates

MongoDB stores users, drivers, rides, and booking history

Google APIs handle maps, distance calculations, and ETA logic
