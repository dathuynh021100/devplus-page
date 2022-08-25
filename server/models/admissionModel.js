const {Schema, model} = require("mongoose")

const admissionModel = new Schema({
    tag : String,
    title : String,
    detail : String,
    image : String
},
{timestamps : true}
);

const Admission = model("Admission", admissionModel)

module.exports = Admission