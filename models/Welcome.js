const mongoose = require('mongoose');
const { Schema } = mongoose;
const welcomeSchema = new Schema({
    title1: {
        type: String
    },
    body1: {
        type: String
    },
    title2: {
        type: String
    },
    body2: {
        type: String
    },
    title3: {
        type: String
    },
    body3: {
        type: String
    }
});


module.exports = mongoose.model('Welcome', welcomeSchema);