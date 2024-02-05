import express from "express"
import { configDotenv } from "dotenv"
import DbConnection from "./config/connectToDb.js"

configDotenv()

const server = express()

DbConnection()

server.listen(process.env.PORT, ()=> {
    console.log("Server Is Running On PORT", process.env.PORT)
})