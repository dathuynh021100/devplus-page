const Router  = require("express")
const route = Router()
const reviewController = require("../controllers/reviewController")

route.get("/api/admin/review/info/:id", reviewController.info)
route.put("/api/admin/review/edit/:id", reviewController.edit)
route.get("/api/admin/review/infoAll",reviewController.infoAll)
route.post("/api/admin/review/create",reviewController.create)
route.delete("/api/admin/review/delete/:id",reviewController.delete)

module.exports = route