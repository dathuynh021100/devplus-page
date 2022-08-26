const Router = require("express");
const route = Router();
const receiveController = require("../controllers/receiveController");
route.get("/api/admin/receive/info/:id", receiveController.info);
route.put("/api/admin/receive/edit/:id", receiveController.edit);
route.get("/api/admin/receive/infoAll", receiveController.infoAll);
route.post("/api/admin/receive/create", receiveController.create);
route.delete("/api/admin/receive/delete/:id", receiveController.delete);
module.exports = route;
