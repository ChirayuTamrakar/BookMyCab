
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

function initializeSocket(server) {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });
    
    io.on('connection', (socket) => {
        console.log(`New client connected: ${socket.id}`);

    socket.on('join', async (data) => {
        const {userId, userType} = data;
        if (userType === 'user') {
            await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            console.log(`User ${userId} joined with socket ID: ${socket.id}`);
        } else if (userType === 'captain') {
            await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            console.log(`Captain ${userId} joined with socket ID: ${socket.id}`);
        }

    });

        socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
        });
    
        // Additional event listeners can be added here
    });
}


function sendMessageToSocketId(socketId, message) {
    const io = require('socket.io')(server);
    if (io.sockets.sockets.has(socketId)) {
        io.to(socketId).emit('message', message);
        console.log(`Message sent to socket ID ${socketId}`);
    } else {
        console.log(`Socket ID ${socketId} not found`);
    }
}


module.exports = {
  initializeSocket,
  sendMessageToSocketId,
  sendMessageToSocketId,          
  };