const express = require('express');
const router = express();
const Event = require('../models/Event');
const Car = require('../models/Car')

router.post('/', async (req, res, next) => {


    const { type, startDate, endDate, price, car_id, KM, fixDescription, dateFix } = req.body;

    switch (type) {
        case 'rental': {
            newEvent = new Event ({
                type: type,
                startDate: startDate,
                endDate: endDate,
                price: price
            })
        }
        break;
        case 'drive': {
            newEvent = new Event ({
                type: type,
                KM: KM
            })
        }
        break;
        case 'fix': {
            newEvent = new Event ({
                type: type,
                fixDescription: fixDescription,
                dateFix: dateFix 
            })
        }
        break;
    }

    
    try {

        const savedEvent = await newEvent.save()
        const [car] = await Car.find({_id: car_id})
        car.events.push(savedEvent)
        const saved = await car.save()
        const [carAndEvents] =  await Car.find({_id: car_id}).populate('events') 
        res.json({saved: saved, carAndEvents: carAndEvents, status: true})

    } catch (err) {
        res.json({error: err.message})
    }
    
 

})



module.exports = router;