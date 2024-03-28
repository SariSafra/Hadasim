import { getAllReceiving, getReceiving, updateReceiving, deleteReceiving, addReceiving } from '../service/receivingService.js'
export default class ReceivingControllers {
    async getReceivingById(req, res, next) {
        try {
            const data = await getReceiving(req.params.id);
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(data);
        }
        catch (err) {
            res.status(404).end("Error while searching receiving  vaccination by id")
            next(err);
        }

    }
    async getAllReceiving(req, res, next) {
        try {
            const data = await getAllReceiving();
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
        catch (err) {
            res.status(404).end("Error while searching receiving vaccinations")
            next(err);
        }
    }

    async updateReceiving(req, res, next) {
        try {
            const response = await updateReceiving(req.params.MemberId, req.params.VaccinationId, req.body);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while updating receiving vaccination")
            next(err);
        }
    }
    async deleteReceiving(req, res, next) {
        try {
            const response = await deleteReceiving(req.params.MemberId, req.params.VaccinationId);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while deleting receiving vaccination")
            next(err);
        }
    }
    async addReceiving(req, res, next) {
        try {
            const response = await addReceiving(req.body);
            res.json(response);
        }
        catch (err) {
            res.status(404).end("Error while adding receiving vaccination")
            next(err);
        }
    }
}