const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// db-setup
try {
  // const uri = 'mongodb://localhost:auth/auth';
  mongoose.connect(
    'mongodb://localhost:auth/auth',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
} catch (error) {
  console.log(error);
}


//instences
const app = express();

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port)

console.log('Server listning on port', port);