const mongoose = require("mongoose")

const ArticlesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true}, 
    rating: {type: Number, required: true},
}, {timestamps: true});

module.exports = mongoose.model("Article", ArticlesSchema) 