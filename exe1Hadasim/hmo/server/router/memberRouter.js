import express from "express";
import memberController from "../controllers/memberControllers.js";
const memberRouter = express.Router();
let MemberController = new memberController();

memberRouter.get("/", MemberController.getAllMembers);
memberRouter.get("/:id", MemberController.getMemberById);
memberRouter.put("/:id", MemberController.updateMember);
memberRouter.delete("/:id", MemberController.deleteMember);
memberRouter.post("/", MemberController.addMember);
export {
    memberRouter
}