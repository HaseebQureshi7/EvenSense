import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "Please provide email and password",
    });
  }
  const user = await User.findOne({ email, password });

  if (!user) {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
  res.status(200).json({
    message: "Logged In Successfully",
    user,
  });
});

const signup = catchAsync(async (req, res, next) => {
    const {fName , lName, email, password, company} = req.body

    const user = await User.create({
        fName,
        lName,
        email,
        password,
        company
    })

    res.status(201).json({
        message : "Registered Successfully",
        user
    })
});

export { login, signup };
