import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
        id : String,
        title: String,
        question: String,
        type: {
            type: String,
            enum: ["Multiple Choice", "True/False", "Fill In The Blanks"],
            default: "Multiple Choice",
        },
        points: Number,
        quizId : String,
    },
    {collection: "questions"});
export default questionSchema;