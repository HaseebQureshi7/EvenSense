import mongoose, { Schema} from 'mongoose';

const updateSchema = new SchemaType({
  title: { type: String, required: true },
  ofProject: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  updateBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Update = mongoose.model('Update', updateSchema);

export default Update;