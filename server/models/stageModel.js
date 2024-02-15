import mongoose, { Schema } from 'mongoose';

const stageSchema = new Schema({
  title: { type: String, required : true},
  position: { type: Number, required : true},
  status: { type: String, enum: ['NotStarted', 'InProgress', 'Completed'], default : "NotStarted" },
  ofProject: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
}, {timestamps : true});

const Stage = mongoose.model('Stage', stageSchema);

export default Stage;