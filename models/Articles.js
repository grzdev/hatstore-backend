const mongoose = require("mongoose")

const ArticlesSchema = new mongoose.Schema({
    
}, {timestamps: true});

module.exports = mongoose.model("Articles", ArticlesSchema)