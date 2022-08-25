const Review = require("../models/reviewModel")

const reviewController = {
    create : async(req , res) =>{
        try {
            const {author, image, job,title} = req.body
            if(!author || !image || !job || !title) {
                res.status(400).json({msg : "Content cannot be empty"})
                return
            }
            const review = new Review({
                author,
                image,
                job,
                title
            })
            await review.save()
            res.status(200).json({msg : "Create review success"})
        }catch(err){
            res.status(500).json({msg : err.message})
        }
    },
    infoAll : async (req , res ) =>{
        try {
            const reviews = await Review.find()
            res.status(200).json(reviews)
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    },
    info : async (req, res ) =>{
        try {
            const id = req.params.id
            const review = await Review.findById(id)
            res.status(200).json(review)
        } catch (error) {
            res.status(200).json({msg : error.message})
        }
    },
    edit : async (req , res) =>{
        try {
            const id = req.params.id
            const {author, job, image, title}  = req.body
            await Review.findByIdAndUpdate(id,{author, job, image, title})
            res.status(200).json({msg : "update success"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    delete : async(req, res) =>{
        try {
            const id = req.params.id
            await Review.findByIdAndDelete(id)
            res.status(200).json({msg : "Delete success"})
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    }
}
module.exports = reviewController