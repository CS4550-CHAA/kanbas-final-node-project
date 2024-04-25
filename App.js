// import express from "express";
// import Hello from "./Hello.js";
// import Lab5 from "./Lab5.js";
// import CourseRoutes from "./Kanbas/courses/routes.js";
// import ModuleRoutes from "./Kanbas/modules/routes.js";
// import UserRoutes from './Kanbas/Users/routes.js';
// import cors from "cors";
// import QuizRoutes from "./Kanbas/quizzes/routes.js";
// const app = express();
// app.use(cors());

// app.use(express.json());
// ModuleRoutes(app);
// CourseRoutes(app);
// UserRoutes(app);
// QuizRoutes(app);
// Lab5(app);
// Hello(app);

// // another project uses 4000 so I used 4001
// app.listen(process.env.PORT || 4001);

import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
// import AssignmentRoutes from './Kanbas/Assignments/routes.js';
// import QuizRoutes from './Kanbas/Quizzes/routes.js';
// import QuestionRoutes from './Kanbas/Questions/routes.js';
import UserRoutes from './Kanbas/Users/routes.js';
import cors from "cors";
// import session from "express-session";
import "dotenv/config";
 
const app = express();
import mongoose from "mongoose";
const CONNECTION_STRING = "mongodb+srv://mallisivakumarh:X7NK5R9sYFeC8dvb@cluster0.ciunnxw.mongodb.net/kanbas_final";
mongoose.connect(CONNECTION_STRING);
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
 
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
   const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
  }
  // app.use(session(sessionOptions));
  app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);