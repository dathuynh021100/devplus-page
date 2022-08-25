const {Schema, model} = require("mongoose")

const commonModel = new Schema({
    title : {
        type: String,
        trim : true
    },
    video : String,
    concerns : [{
        content: {
            type: String,
            trim : true
        },
        detail : {
            type : String,
            trim : true
        }
    }]
})
const Common = model("Common",commonModel)
module.exports = Common