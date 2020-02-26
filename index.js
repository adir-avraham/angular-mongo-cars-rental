require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


//define routes
const getAllCars = require('./routes/getAllCars');
const getOneCar = require('./routes/getOneCar');
const createEvent = require('./routes/createEvent');
const getAllEvents = require('./routes/getAllEvents');

app.use(cors());
app.use(bodyParser.json());

//index routes
app.use('/getAllCars', getAllCars);
app.use('/getOneCar', getOneCar);
app.use('/createEvent', createEvent);
app.use('/getAllEvents', getAllEvents);


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Connected to DB")
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port: ${process.env.PORT}`)
});



