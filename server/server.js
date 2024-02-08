import express from "express";
import { configDotenv } from "dotenv";
import DbConnection from "./config/connectToDb.js";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import companyRouter from "./routes/companyRoutes.js";
import updateRouter from "./routes/updateRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import stageRouter from "./routes/stageRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cors from "cors"

const server = express();

configDotenv();
DbConnection();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());


server.use("/api/v1/users", userRouter);
server.use("/api/v1/tasks", taskRouter);
server.use("/api/v1/company", companyRouter);
server.use("/api/v1/project", projectRouter);
server.use("/api/v1/stage", stageRouter);
server.use("/api/v1/update", updateRouter);
server.use("/api/v1/comment", commentRouter);
server.use("/api/v1/auth", authRouter)

server.use("*", () => {
  console.log("Not Found");
});

server.listen(process.env.PORT, () => {
  console.log("Server is running on PORT", process.env.PORT);
});


// LOGIN - done
// SIGNUP (USER <MANAGER> ) - done
// SIGNUP (TEAM MEMBER)
// RUD USER - done
// CRUD COMPANY - done
// CRUD PROJECT
// CRUD STAGE
// CRUD TASK
// CRUD UPDATE
// CRUD COMMENT