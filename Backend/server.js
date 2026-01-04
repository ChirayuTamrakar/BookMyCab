//This is entry point of backend not App.js
const {initializeSocket } = require('./socket');
const http = require("http");
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})