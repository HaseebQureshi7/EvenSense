import express from "express";
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } from "../controllers/projectController.js";

const projectRouter = express.Router()

projectRouter.route("/").post(createProject).get(getAllProjects)
projectRouter.route("/:id").get(getProjectById).patch(updateProject).delete(deleteProject)

export default projectRouter