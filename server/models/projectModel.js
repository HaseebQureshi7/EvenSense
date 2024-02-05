import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: { type: String, required: true },
  deadline: { type: Number, required: true },
  currentStage: { type: Schema.Types.ObjectId, ref: "Stage", required: true },
  teamLead: { type: Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  projectPurpose: { type: String, required: true },
  projectErd: { type: String, required: true },
  figmaDesign: { type: String, required: true },
},{timestamps : true});

const Project = mongoose.model("Project", projectSchema);

export default Project;