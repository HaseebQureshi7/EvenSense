import mongoose, { Schema} from 'mongoose';

const taskSchema = new Schema({
  title: { type: String, required: true },
  assignedTo: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  deadline: { type: Number, required: true },
  status: { type: String, enum: ['Incomplete', 'InProgress', 'Completed'], required: true },
  ofProject: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  stage: { type: Schema.Types.ObjectId, ref: 'Stage', required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
  completionDate: { type: Date },
  assignedDate: { type: Date, default: Date.now }
},{timestamps : true});

const Task = mongoose.model('Task', taskSchema);

export default Task;
