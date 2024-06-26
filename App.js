import express from "express";
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AnswerRoutes from "./Kanbas/Quizzes/Answers/routes.js";
import QuestionRoutes from "./Kanbas/Quizzes/Questions/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/Quizzes/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const CONNECTION_STRING =
  "mongodb+srv://mallisivakumarh:X7NK5R9sYFeC8dvb@cluster0.ciunnxw.mongodb.net/kanbas_final";

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
mongoose.connect(CONNECTION_STRING); //hardcode this to be connection string to get it to work
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AnswerRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);

Lab5(app);
Hello(app);
//if you guys use 4001, change this
app.listen(process.env.PORT || 4000);
