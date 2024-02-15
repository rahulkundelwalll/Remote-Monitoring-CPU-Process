import mongoose from "mongoose";

const processSchema = new mongoose.Schema(
  {
    Image_Name: {
      type: String,
      required: true,
    //   trim: true,
    },
    PID: {
      type: String,
      required: true,
      unique: true,
    },
    Session_name: {
      type: String,
      required: true,
    },
    memory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", processSchema);
