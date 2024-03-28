import express from "express";
import ReceivingControllers from "../controllers/ReceivingControllers.js";
const ReceivingRouter = express.Router();
let receivingControllers = new ReceivingControllers();

ReceivingRouter.get("/", receivingControllers.getAllReceiving);
ReceivingRouter.get("/:id", receivingControllers.getReceivingById);
ReceivingRouter.put("/:MemberId/:VaccinationId", receivingControllers.updateReceiving);
ReceivingRouter.delete("/:MemberId/:VaccinationId", receivingControllers.deleteReceiving);
ReceivingRouter.post("/", receivingControllers.addReceiving);
export {
    ReceivingRouter
}