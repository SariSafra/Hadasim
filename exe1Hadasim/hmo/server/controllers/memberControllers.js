import { getAllMembers, getMember, UpdateMember, deleteMember, addMember } from "../service/memberService.js";

export default class memberController {
    async getMemberById(req, res, next) {
        try {
            const data = await getMember(req.params.id);
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
    async getAllMembers(req, res, next) {
        try {
            const data = await getAllMembers();
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

    async updateMember(req, res, next) {
        try {
            const response = await UpdateMember(req.params.id, req.body);
            res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async deleteMember(req, res, next) {
        try {
            const response = await deleteMember(req.params.id);
            res.json(response);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 404;
            err.message = ex;
            next(err)
        }
    }
    async addMember(req, res, next) {
        try {
            let response;
            console.log(req.body)
            const data = await getMember(req.body.MemberId);
            console.log(data[0]);
            if(data[0])
           {
            throw("Duplicates of ID card of members");

        }
            else{
                response = await addMember(req.body);

            }
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