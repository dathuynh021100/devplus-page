const {Schema, model} = require("mongoose")

const bannerModel = new Schema({
    tag : String,
    title : String,
    detail : String,
    image : String
},
{timestamps : true}
);

const Banner = model("Banner", bannerModel)

module.exports = Banner