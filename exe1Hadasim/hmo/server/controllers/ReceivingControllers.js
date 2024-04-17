import { getAllReceiving, getReceiving, updateReceiving, deleteReceiving, addReceiving } from '../service/receivingService.js'
export default class ReceivingControllers {
    async getReceivingById(req, res, next) {
        try {
            const data = await getReceiving(req.params.id);
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
    async getAllReceiving(req, res, next) {
        try {
            const data = await getAllReceiving();
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

    async updateReceiving(req, res, next) {
        try {
            const response = await updateReceiving(req.params.MemberId, req.params.VaccinationId, req.body);
            res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async deleteReceiving(req, res, next) {
        try {
            const response = await deleteReceiving(req.params.MemberId, req.params.VaccinationId);
            res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async addReceiving(req, res, next) {
        try {
            console.log("in rec controller, body: "+req.body)
            const response = await addReceiving(req.body);
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