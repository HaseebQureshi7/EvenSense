import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  role: { type: String, enum: ["Manager", "TeamMember"], required: true },
}, {timestamps : true});

const User = mongoose.model("User", userSchema);

export default User;
