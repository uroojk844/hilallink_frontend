import mongoose, { connection } from "mongoose";

const connections = {};

export async function connectDB() {
  if (connection?.readyState) return;
  await mongoose
    .connect(
      "mongodb+srv://hilallink:g7CwgnuBOd6Bit4g@hilallink.c4qmfmu.mongodb.net/?retryWrites=true&w=majority&appName=hilallink",
    )
    .then((db) => {
      connections.isConnected = db.connections[0].readyState;
      console.log("Connected to mongodb")
    })
    .catch((err) => console.log(err));

    mongoose.connection.on("disconnected",()=>console.log("Disconnected from mongodb"))
}

