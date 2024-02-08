import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";
import Company from "../models/companyModel.js";

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email and password",
    });
  }
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  res.status(200).json({
    message: "Logged In Successfully",
    user,
  });
});

const signup = catchAsync(async (req, res, next) => {
  const { fName, lName, email, password } = req.body;

  const company = await Company.create({
    name: fName + "'s Company",
  });

  if (company) {
    const user = await User.create({
      fName,
      lName,
      email,
      password,
      profilePicture: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=" + fName,
      company: company._id,
    });

    res.status(201).json({
      message: "Registered Successfully",
      user,
    });
  }
});

export { login, signup };
