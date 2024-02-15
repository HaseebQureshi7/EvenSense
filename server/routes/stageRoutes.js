import express from "express";
import { createStage, deleteStage, getAllStageOfProject, getStageById, updateStage } from "../controllers/stageController.js";

const stageRouter = express.Router()


stageRouter.route("/").post(createStage)
stageRouter.route("/:pId").get(getAllStageOfProject)
stageRouter.route("/:id").get(getStageById).patch(updateStage).delete(deleteStage)
export default stageRouter