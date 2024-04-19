import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: String,
    availability: String,
    published: Boolean,
    dueDate: Date,
    points: Number,
    numberOfQuestions: Number,
    course: String,
  },
  { collection: "quizzes" }
);
export default quizSchema;
