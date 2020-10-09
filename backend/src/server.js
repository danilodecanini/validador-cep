const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const server = express();
const cors = require('cors');

const routes = require('./routes');
const { exceptionHandler } = require('./app/middlewares/exceptionHandler');

if (process.env.NODE_ENV === 'development') {
  server.use(cors());
}

server.use(routes);
server.use(exceptionHandler);

server.listen(process.env.APP_PORT || 3333, () => {
  console.log(`server is running on port ${process.env.APP_PORT}`);
});
