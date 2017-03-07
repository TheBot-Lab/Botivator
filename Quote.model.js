const mongoose = require('mongoose');
const random = require('mongoose-simple-random');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
	image_url: String
});
QuoteSchema.plugin(random);

module.exports = mongoose.model('Quote', QuoteSchema);