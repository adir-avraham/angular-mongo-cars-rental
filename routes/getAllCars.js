const express = require('express');
const router = express.Router();
const Car = require('../models/Car');




router.get('/', async (req, res, next) => {


    try{
        const cars = await Car.find().populate('events')
        if (!cars) return res.json({message: "not found", status: false})
        res.json({cars: cars, status: true})  
    } catch {
        res.json({error: "some error", status: false})
    }

})

module.exports = router;