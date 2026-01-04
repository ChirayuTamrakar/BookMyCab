const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express(); //app is express instance 
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captian.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

connectToDb();

// app.use( ) - It is invoked during the request-response cycle, every time a matching request comes in
app.use(cors());         // We will put our domain in production here.
app.use(express.json()); // express.json() - Is a built-in middleware in Express.It parses incoming requests with JSON payloads and converts them into a JavaScript object. Without this, req.body would be undefined for JSON requests.
app.use(express.urlencoded({ extended: true})); //By default, the data is URL-encoded (like fullname=John+Doe&email=john%40example.com). 
                                                    //extended: false → Only parses simple key-value pairs, no nested objects.
                                                    //extended: true → Can parse nested objects, like:
app.use(cookieParser()); //Cookie-parser is a middleware for Express. It parses the Cookie header in incoming requests and makes cookies available as a JavaScript object on req.cookies.

// IMP:- ALWAYS KEEP THIS ROUTES BELOW CORS, Cookie-Parser, anad all .......other wise undefined....below code dont run.
app.use('/users', userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app; //is a Node.js syntax to export the app object so it can be used in other files.