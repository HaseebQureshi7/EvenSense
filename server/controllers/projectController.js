import catchAsync from "../utils/catchAsync.js";
import Project from "../models/projectModel.js";

//@description     Get All Projects
//@route           GET /api/v1/project
const getAllProjects = catchAsync(async (req, res) => {
  const projects = await Project.find().populate("members");
  res.status(200).json({
    message: "Projects Found",
    count: projects.length,
    projects,
  });
});


//@description     Creates A Project
//@route           POST /api/v1/project
const createProject = catchAsync(async (req, res, next) => {
  const body = req.body;
  const project = await Project.create(body);

  if (!project) {
    return res.status(400).send("Project not created");
  }

  res.status(201).json({
    message: "Project Created",
    project,
  });
});


//@description     Get Project With ID
//@route           GET /api/v1/project/:id
const getProjectById = catchAsync(async (req, res) => {
  const _id = req.params.id;
  const project = await Project.find({ _id }).populate("members");
  res.status(200).json({
    message: "Project Found",
    count: project.length,
    project,
  });
});


//@description     Update Project With ID
//@route           PATCH /api/v1/project/:id
const updateProject = catchAsync(async (req, res) => {
  const _id = req.params.id;
  const project = await Project.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "Project Updated",
    project,
  });
});


//@description     Delete Project With ID
//@route           DELETE /api/v1/project/:id
const deleteProject = catchAsync(async (req, res) => {
  const _id = req.params.id;
  await Project.findByIdAndDelete({ _id });
  res.status(200).send("Project Deleted");
});


//@description     Get Project With Manager ID
//@route           POST /api/v1/project/manager
const getProjectsWithManagerId = catchAsync(async (req, res, next) => {
  const _id = req.body;

  const projects = await Project.find({ owner: _id }).populate("members");
  if (!projects) {
    return res.status(404).send("No Projects Found");
  }

  res.status(200).json({
    message: "Projects Found",
    count: projects.length,
    projects,
  });
});

export {
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  createProject,
  getProjectsWithManagerId,
};
