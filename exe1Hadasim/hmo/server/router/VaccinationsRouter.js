import express from "express";
import VaccinationsControllers from "../controllers/VaccinationsControllers.js";
const VaccinationRouter = express.Router();
let VaccinationsController = new VaccinationsControllers();

VaccinationRouter.get("/", VaccinationsController.getAllVaccinations);
VaccinationRouter.get("/:id", VaccinationsController.getVaccinationById);
VaccinationRouter.put("/:id", VaccinationsController.updateVaccination);
VaccinationRouter.delete("/:id", VaccinationsController.deleteVaccination);
VaccinationRouter.post("/", VaccinationsController.addVaccination);
export {
    VaccinationRouter
}