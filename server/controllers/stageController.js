import catchAsync from "../utils/catchAsync.js";
import Stage from "../models/stageModel.js";
import Project from "../models/projectModel.js";

//@description     Creates A Stage
//@route           POST /api/v1/stage
const createStage = catchAsync(async (req, res, next) => {
  const body = req.body;
  const stage = await Stage.create(body);

  if (!stage) {
    return res.status(400).send("Stage not created");
  }

  res.status(201).json({
    message: "Stage Created",
    stage,
  });
});

const getAllStageOfProject = catchAsync(async (req, res) => {
  const {pId} = req.params
  try {
    let stages = await Stage.find({ofProject: pId});
    res.status(200).json({
      message: "Stages Found",
      count: stages.length,
      stages,
    });
  }
  catch (err) {
    res.status(404).json({
      message: "No Stages Found",
      count: 0,
    });
  }
});


//@description     Get Stage With ID
//@route           GET /api/v1/stage/:id
const getStageById = catchAsync(async (req, res) => {
  const _id = req.params.id;
  let stage = await Stage.find({_id}).populate("ofProject");

  stage = await Project.populate(stage, {
    path: "ofProject.members",
  });

  res.status(200).json({
    message: "Stage Found",
    stage,
  });
});


//@description     Update Stage With ID
//@route           PATCH /api/v1/stage/:id
const updateStage = catchAsync(async (req, res) => {
  const _id = req.params.id;
  const stage = await Stage.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "Stage Updated",
    stage,
  });
});


//@description     Delete Stage With ID
//@route           DELETE /api/v1/stage/:id
const deleteStage = catchAsync(async (req, res) => {
  const _id = req.params.id;
  await Stage.findByIdAndDelete({ _id });
  res.status(200).send("Stage Deleted");
});

export { getAllStageOfProject, getStageById, updateStage, deleteStage, createStage };
