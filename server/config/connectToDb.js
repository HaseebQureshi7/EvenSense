import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected To Database");
  } catch (error) {
    console.log("Error In Database");
  }
};

export default DbConnection;
