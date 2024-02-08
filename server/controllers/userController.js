import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";

const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "Users Found",
    count: users.length,
    users,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const _id = req.params.id;
  const user = await User.find({ _id }).populate({
    path: "company",
  });
  res.status(200).json({
    message: "User Found",
    user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const _id = req.params.id;
  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "User Updated",
    count: user.length,
    user,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const _id = req.params.id;
  await User.findByIdAndDelete({_id});
  res.status(200).send("User Deleted");
});

export { getAllUsers, getUserById, updateUser, deleteUser };
