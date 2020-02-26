const express = require('express');
const router = express.Router();

const Car = require('../models/Car')



router.post('/', async (req, res, next) => {
    const { car_id } = req.body;
    console.log(car_id)

    try {
        const car =  await Car.find({_id: car_id}).populate('events')          
        if (!car) return res.json({message: "not found", status: false});
        res.json({car: car, status: true, message: "one car and its events"})
    } catch (err) {
        res.json({error: err.message, status: false})
    }
    
})

module.exports = router;