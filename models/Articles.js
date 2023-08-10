const mongoose = require("mongoose")

const ArticlesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    bgCover: {type: String, required: true},
    desc: {type: String, required: true},
    articleBody: {type: String, required: true},
    dateMade: {type: String, required: true},
    minRead: {type: String, required: true},
    relatedTopic1: {type: String, required: true}, 
    relatedTopic2: {type: String, required: true}, 
    relatedTopic3: {type: String, required: true}, 
    writtenBy: {type: String, required: true}, 
}, {timestamps: true});

module.exports = mongoose.model("Article", ArticlesSchema) 