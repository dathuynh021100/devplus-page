const Router = require("express")
const route = Router()
const sidebarController = require('../controllers/sidebarController')

route.get("/api/admin/sidebar/info", sidebarController.info)
route.post("/api/admin/sidebar/create",sidebarController.create)
route.post("/api/admin/sidebar/edit",sidebarController.edit)

module.exports = route;