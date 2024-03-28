import { getVaccination, getAllVaccinations, updateVaccination, deleteVaccination, addVaccination } from '../service/vaccinationsService.js'
export default class VaccinationsControllers {
    async getVaccinationById(req, res, next) {
        try {
            const data = await getVaccination(req.params.id);
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
        catch (err) {
            res.status(404).end("Error while serching Vaccination by id.")
            next(err);
        }

    }
    async getAllVaccinations(req, res, next) {
        try {
            const data = await getAllVaccinations();
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
        catch (err) {
            res.status(404).end("Error while searching Vaccinations.")
            next(err);
        }
    }

    async updateVaccination(req, res, next) {
        try {
            const response = await updateVaccination(req.params.id, req.body);
            return res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while updating vaccination")
            next(err);
        }
    }
    async deleteVaccination(req, res, next) {
        try {
            const response = await deleteVaccination(req.params.id);
            return res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while deleting vaccination")
            next(err);
        }
    }
    async addVaccination(req, res, next) {
        try {
            const response = await addVaccination(req.body);
            return res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while adding vaccination")
            next(err);
        }
    }
}