import express from "express";
import { login, signup } from "../controllers/authController";

const authRouter = express.Router()

// @Route : api/v1/auth/login
// @Description : API For login
authRouter.route("/login").post(login)

// @Route : api/v1/auth/signup
// @Description : API For Signup
authRouter.route("/signup").post(signup)

export default authRouter