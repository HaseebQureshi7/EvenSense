import mongoose, { Schema } from 'mongoose';

const phaseSchema = new Schema({
  phase: { type: String, enum: ['Planning', 'Designing', 'Development', 'Testing & Deployment'], required: true },
  status: { type: String, enum: ['Incomplete', 'InProgress', 'Completed'], required: true },
  ofProject: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
}, {timestamps : true});

const Phase = mongoose.model('Phase', phaseSchema);

export default Phase;
