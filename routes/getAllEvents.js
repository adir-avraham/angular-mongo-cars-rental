const express = require('express');
const router = express();
const Event = require('../models/Event');

router.get('/', async (req, res, next) => {
    
    
    try {
        const events = await Event.find().populate("car");
        if (!events) return res.json({message: "not found", status: false})
        res.json({events: events, status: true})
    } catch (err) {
        res.json({err: err.message})
    }

})

module.exports = router;