import mongoose, { Schema} from 'mongoose';

const commentSchema = new Schema({
  comment: { type: String, required: true },
  commentBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ofTask: { type: Schema.Types.ObjectId, ref: 'Task', required: true }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
