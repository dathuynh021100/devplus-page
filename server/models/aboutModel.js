const {Schema, model} = require("mongoose")

const aboutSchema = new Schema({
    tag : String,
    title : String,
    content : String,
    items :[Object]
},
{timestamps : true}
);

const About = model("About", aboutSchema)

module.exports = About