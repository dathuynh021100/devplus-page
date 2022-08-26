const Router = require("express")
const route = Router()
const admissionController = require('../controllers/admissionController')

route.get("/api/admin/admission/info", admissionController.info)
route.post("/api/admin/admission/create",admissionController.create)
route.post("/api/admin/admission/edit",admissionController.edit)

module.exports = route;