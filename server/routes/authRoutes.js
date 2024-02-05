import express from "express";

const authRouter = express.Router()

authRouter.route("/login")
authRouter.route("/signup")

export default authRouter