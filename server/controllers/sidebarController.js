const Sidebar = require('../models/sidebarModel')

const sidebarController = {
    create : async(req, res) =>{
        try{
            const {tag, logo,text,images,map} = req.body
            const sidebar = new Sidebar({
                tag,
                logo,
                text,
                images,
                map
            })
            await sidebar.save()
            res
            .status(200)
            .json({ msg:"create sidebar success"})
        }catch(err){
            res.status(500).json({msg : err.message})
        }
    },
    info : async(req, res) =>{
        try {
            const sidebar = await Sidebar.findOne({tag : "sidebar1"})
            // console.log(sidebar)
            res.status(200).json(sidebar)
        } catch (err) {
            res.status(500).json({msg : err.messasge})
        }
    },
    edit : async(req, res) =>{
        try {
            const {logo,text,images,map} = req.body
            await Sidebar.findOneAndUpdate({tag : "sidebar1"},{logo,text,images,map})
            res.status(200).json({msg: "Update success"})
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    }
}

module.exports = sidebarController;
