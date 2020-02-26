const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
    
    type: {
        type: String,
        require: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    price: {
        type: Number
    },
    KM: {
        type: Number
    },
    fixDescription: {
        type: String
    },
    dateFix: {
        type: Date
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car',
        require: true  
    }
})


const EventModel = mongoose.model('event', EventSchema);
module.exports = EventModel;