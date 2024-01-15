const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cors());

//PORT
const port = 8000;
app.listen(port, ()=> {
    console.log('Server running on port 8000')
});