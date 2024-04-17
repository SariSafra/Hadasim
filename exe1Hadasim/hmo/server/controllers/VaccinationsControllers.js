import { getVaccination, getAllVaccinations, updateVaccination, deleteVaccination, addVaccination } from '../service/vaccinationsService.js'
export default class VaccinationsControllers {
    async getVaccinationById(req, res, next) {
        try {
            const data = await getVaccination(req.params.id);
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }

    }
    async getAllVaccinations(req, res, next) {
        try {
            const data = await getAllVaccinations();
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }

    async updateVaccination(req, res, next) {
        try {
            const response = await updateVaccination(req.params.id, req.body);
            return res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async deleteVaccination(req, res, next) {
        try {
            const response = await deleteVaccination(req.params.id);
            return res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async addVaccination(req, res, next) {
        try {
            const response = await addVaccination(req.body);
            return res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
}