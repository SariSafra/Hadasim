import { getAllCoronas, getCoronaById, updateCorona, deleteCorona, addCorona } from '../service/coronaService.js'
export default class CoronaControllers {
    async getCoronaById(req, res, next) {
        try {
            const data = await getCoronaById(req.params.id);
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(data);
        }
        catch (err) {
            res.status(404).end("Error while searching corona by id")
            next(err);
        }

    }
    async getAllCoronas(req, res, next) {
        try {
            const data = await getAllCoronas();
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
        catch (err) {
            res.status(404).end("Error while searching corona")
            next(err);
        }
    }

    async updateCorona(req, res, next) {
        try {
            const response = await updateCorona(req.params.id, req.body);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while updating corona")
            next(err);
        }
    }
    async deleteCorona(req, res, next) {
        try {
            const response = await deleteCorona(req.params.id);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while deleting corona ")
            next(err);
        }
    }
    async addCorona(req, res, next) {
        try {
            const response = await addCorona(req.body);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while adding corona")
            next(err);
        }
    }
}