const mongoose = require('mongoose');

const URI = process.env.DB_URI ?
    process.env.DB_URI :
    'mongodb://localhost/testkeeper';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection
connection.once('open', () => {
    console.log('Db is connected.');
})