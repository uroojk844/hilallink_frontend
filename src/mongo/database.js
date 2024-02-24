import mongoose, { connection } from "mongoose";

const connections = {};

export function connectDB() {
  if (connection?.readyState) return;
  mongoose
    .connect(
      "mongodb+srv://hilallink:g7CwgnuBOd6Bit4g@hilallink.c4qmfmu.mongodb.net/?retryWrites=true&w=majority&appName=hilallink"
    )
    .then((db) => {
      connections.isConnected = db.connections[0].readyState;
    })
    .catch((err) => console.log(err));
}

