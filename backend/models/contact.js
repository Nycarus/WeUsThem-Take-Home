const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact