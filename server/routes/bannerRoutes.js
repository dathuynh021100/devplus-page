const Router = require("express")
const route = Router()
const bannerController = require('../controllers/bannerController')

route.get("/api/admin/banner/info", bannerController.info)
route.post("/api/admin/banner/create",bannerController.create)
route.post("/api/admin/banner/edit",bannerController.edit)

module.exports = route;