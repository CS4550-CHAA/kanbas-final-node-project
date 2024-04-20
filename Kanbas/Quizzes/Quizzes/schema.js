import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: String,
    availability: String,
    description: String,
    published: Boolean,
    dueDate: Date,
    // points: Number,
    numberOfQuestions: Number,
    course: String,
    quizType: {
      type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffleAnswers: String,
    timeLimit: Number,
    multipleAttempts: String,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: String,
    webCamRequired: String,
    lockQuestionsAfterAnswering: String,
    availableDate: Date,
    untilDate: Date,
  },
  { collection: "quizzes" }
);
export default quizSchema;
