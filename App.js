import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import QuestionRoutes from "./Kanbas/Quizzes/Questions/routes.js";
import "dotenv/config";
import QuizRoutes from "./Quizzes/routes.js";

const app = express();
app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/kanbas-project");
ModuleRoutes(app);
CourseRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
Lab5(app);
Hello(app);

// another project uses 4000 so I used 4001
app.listen(process.env.PORT || 4001);
