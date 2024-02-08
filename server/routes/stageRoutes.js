import express from "express";
import { createStage, deleteStage, getAllStages, getStageById, updateStage } from "../controllers/stageController.js";

const stageRouter = express.Router()


stageRouter.route("/").post(createStage).get(getAllStages)
stageRouter.route("/:id").get(getStageById).patch(updateStage).delete(deleteStage)
export default stageRouter