const About = require("../models/aboutModel")

const aboutController = {
    create : async(req , res) =>{
        try{
            const {tag,title, content, items} = req.body
            const about = new About({
                tag,
                title,
                content,
                items,
            })
            await about.save()
            res.status(200).json({
                msg : "Create about success"
            })
        }catch(err){
            res.status(500).json({msg : err.message})
        }   
    },
    info : async(req, res) =>{
        try {
          const about = await About.findOne({tag : "about1"})  
          console.log(about.id)
          res.status(200).json(about)
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    },
    edit : async(req, res) =>{
        try{
            const {title, content,items} = req.body

            console.log(req._id)
            await About.findOneAndUpdate({tag: "about1"},{title,content,items})
            res.status(200).json({msg: "Update success"})
        }catch (err){
            res.status(500).json({msg : err.message})
        }
    }
}
module.exports = aboutController