const express = require('express');
const router = express();
const Event = require('../models/Event');
const Car = require('../models/Car')

router.post('/', async (req, res, next) => {


    const { type, startDate, endDate, price, car_id, KM, fixDescription, dateFix } = req.body;

    newEvent = new Event ({
        type: type,
        startDate: startDate,
        endDate: endDate,
        price: price,
        KM: KM,
        fixDescription: fixDescription,
        dateFix: dateFix 
    })


    
    try {

        const savedEvent = await newEvent.save()
        const [car] = await Car.find({_id: car_id})
        car.events.push(savedEvent)
        const saved = await car.save()
        res.json({saved: saved, status: true})

    } catch (err) {
        res.json({error: err.message})
    }
    
 

})



module.exports = router;