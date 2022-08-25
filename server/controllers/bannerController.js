const Banner = require('../models/bannerModel')

const bannerController = {
    create : async(req, res) =>{
        try{
            const {tag, title,detail,image} = req.body
            const banner = new Banner({
                tag,
                title,
                detail,
                image
            })
            await banner.save()
            res
            .status(200)
            .json({ msg:"create banner success"})
        }catch(err){
            res.status(500).json({msg : err.message})
        }
    },
    info : async(req, res) =>{
        try {
            const banner = await Banner.findOne({tag : "banner1"})
            res.status(200).json(banner)
        } catch (err) {
            res.status(500).json({msg : err.message})
        }
    },
    edit : async(req, res) =>{
        try {
            const {title,detail,image} = req.body
            await Banner.findOneAndUpdate({tag : "banner1"},{title,detail,image})
            res.status(200).json({msg: "Update success"})
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    }
}

module.exports = bannerController;
