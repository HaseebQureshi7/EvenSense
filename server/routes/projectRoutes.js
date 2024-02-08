import express from "express";
import { createProject, deleteProject, getAllProjects, getProjectById, getProjectsWithManagerId, updateProject } from "../controllers/projectController.js";

const projectRouter = express.Router();

// Route to create a new project
projectRouter.route("/").post(createProject); // POST /api/v1/project

// Route to get all projects
projectRouter.route("/").get(getAllProjects); // GET /api/v1/project

// Route to get projects with a specific manager ID
projectRouter.route("/manager").post(getProjectsWithManagerId); // POST /api/v1/project/manager

// Route to get, update, or delete a project by ID
projectRouter.route("/:id")
  .get(getProjectById)    // GET /api/v1/project/:id
  .patch(updateProject)   // PATCH /api/v1/project/:id
  .delete(deleteProject); // DELETE /api/v1/project/:id

export default projectRouter;
