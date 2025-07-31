import mongoose from "mongoose";

const dbConnection = async () => {
  const url = process.env.DB_URL;
  const db_name = "empMgmtSystem";
  try {
    await mongoose.connect(`${url}/${db_name}`);
    console.log("Connected to database successfully");
  } catch (e) {
    console.log(e);
    console.log("Can not connect to database");
  }
};

export default dbConnection;
