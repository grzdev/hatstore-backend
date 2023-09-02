const mongoose = require("mongoose")

const ArticlesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    bgCover: {type: String, required: true},
    desc: {type: String, required: true},
    subheading1: {type: String, required: true},
    body1: {type: String, required: true},

    subheading2: {type: String, required: true},
    body2: {type: String, required: true},

    subheading3: {type: String, required: true},
    body3: {type: String, required: true},

    subheading4: {type: String, required: false},
    body4: {type: String, required: false},

    subheading5: {type: String, required: false},
    body5: {type: String, required: false},
    dateMade: {type: String, required: true},
    minRead: {type: String, required: true}, 
    writtenBy: {type: String, required: true}, 
}, {timestamps: true});

module.exports = mongoose.model("Article", ArticlesSchema) 