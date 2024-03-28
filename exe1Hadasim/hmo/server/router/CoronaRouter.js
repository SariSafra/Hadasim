import express from "express";
import CoronaControllers from "../controllers/CoronaControllers.js";
const coronaRouter = express.Router();
let coronaControllers = new CoronaControllers();

coronaRouter.get("/", coronaControllers.getAllCoronas);
coronaRouter.get("/:id", coronaControllers.getCoronaById);
coronaRouter.put("/:id", coronaControllers.updateCorona);
coronaRouter.delete("/:id", coronaControllers.deleteCorona);
coronaRouter.post("/", coronaControllers.addCorona);
export {
    coronaRouter
}