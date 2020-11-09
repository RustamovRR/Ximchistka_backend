const mongoose = require('mongoose');
const { Schema } = mongoose;


const serviceSchema = new Schema({
	image: {
		type: String,
		// required: true
	},
	title: {
		type: String,
		// required: true
	},
	type: {
		type: String,
		// required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	price: {
		type: String,
		// required: true
	}
});

module.exports = mongoose.model('Services', serviceSchema);