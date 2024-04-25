import mongoose from "mongoose";
const answerSchema = new mongoose.Schema({
    answer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    questionId: { type: String, required: true },
  },
  { collection: "answers" });
export default answerSchema;