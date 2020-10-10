const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const server = require('./app');

server.listen(process.env.APP_PORT || 3333);

