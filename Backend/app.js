const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captian.routes')
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');


connectToDb();

app.use(cors());  // we will put our domain in production here 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());


//IMP:- ALWAYS KEEP THIS ROUTES BELOW CORS, Cookie-Parser, anad all .......other wise undefined....below code dont run.
app.use('/users', userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;