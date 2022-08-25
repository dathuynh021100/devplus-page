const {Schema, model} = require("mongoose")

const reviewSchema = new Schema({
    author : {
        type: String,
        trim : true
    },
    image : String,
    job : {
        type: String,
        trim : true
    },
    title : {
        type: String,
        trim : true
    }
}, {timestamps : true})

const Review = model("Review", reviewSchema)

module.exports = Review