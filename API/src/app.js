const express = require('express')
const cors = require('cors')
const app = express()



//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes
app.use('/api/notes', require('./routes/notes'))

module.exports = app;