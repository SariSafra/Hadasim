import { getAllCoronas, getCoronaById, updateCorona, deleteCorona, addCorona } from '../service/coronaService.js'
export default class CoronaControllers {
    async getCoronaById(req, res, next) {
        try {
            const data = await getCoronaById(req.params.id);
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(data);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }

    }
    async getAllCoronas(req, res, next) {
        try {
            const data = await getAllCoronas();
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

    async updateCorona(req, res, next) {
        try {
            const response = await updateCorona(req.params.id, req.body);
            res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async deleteCorona(req, res, next) {
        try {
            const response = await deleteCorona(req.params.id);
            res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async addCorona(req, res, next) {
        try {
            const response = await addCorona(req.body);
            res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
}