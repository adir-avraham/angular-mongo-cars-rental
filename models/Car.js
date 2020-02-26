const mongoose = require('mongoose');


const CarSchema = new mongoose.Schema({
    lp: {
        type: Number,
        unique: true,
        require: true
    },
    color: {
        type: String,
        require: true
    }, 
    type: {
        type: String,
        require: true
    }
    ,
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    }]
})


module.exports = mongoose.model('car', CarSchema);