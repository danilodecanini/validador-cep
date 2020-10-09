const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const { exceptionHandler } = require('./app/middlewares/exceptionHandler');

mongoose.connect(`mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

if (process.env.NODE_ENV === 'development') {
  server.use(cors());
}

server.use(express.json());
server.use(routes);
server.use(exceptionHandler);

server.listen(process.env.APP_PORT || 3333, () => {
  console.log(`server is running on port ${process.env.APP_PORT}`);
});
