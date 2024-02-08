import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: { type: String, required: true },
  owner : { type: Schema.Types.ObjectId, ref: "User", required: true },
  deadline: { type: Number, required: true },
  currentStage: { type: Schema.Types.ObjectId, ref: "Stage"},
  teamLead: { type: Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  projectPurpose: { type: String, required: true },
  projectErd: { type: String},
  figmaDesign: { type: String},
},{timestamps : true});

const Project = mongoose.model("Project", projectSchema);

export default Project;
