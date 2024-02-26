const express = require('express');
const app = express();
const cookie = require('cookie-parser')
const cors = require('cors')

const sentiment = require('./routes/sentiment')
const program = require('./routes/program')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json({limit:'50mb'}));
app.use(cors())

app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(cookie());

app.use('/api', sentiment);
app.use('/api', program);


module.exports = app