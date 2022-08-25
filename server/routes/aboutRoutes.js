const Router = require("express")
const route = Router()
const aboutController = require("../controllers/aboutController")

route.get("/api/admin/about/info",aboutController.info)
route.post("/api/admin/about/create",aboutController.create)
route.post("/api/admin/about/edit",aboutController.edit)

module.exports = route