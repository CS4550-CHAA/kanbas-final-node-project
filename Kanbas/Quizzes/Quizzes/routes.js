import * as dao from "./dao.js";
export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const Quiz = await dao.createQuiz(req.body);
    res.json(Quiz);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.QuizId);
    res.json(status);
  };

  const findAllQuizzes = async (req, res) => {
    const Quizzes = await dao.findAllQuizzes();
    res.json(Quizzes);
  };

  const findQuizById = async (req, res) => {
    const Quiz = await dao.findQuizById(req.params.QuizId);
    res.json(Quiz);
  };

  const findQuizzesByCourseId = async (req, res) => {
    const Quizzes = await dao.findQuizzezByCourse(req.params.CourseId);
    res.json(Quizzes);
  };

  const updateQuiz = async (req, res) => {
    const { QuizId } = req.params;
    const status = await dao.updateQuiz(QuizId, req.body);
    res.json(status);
  };

  app.post("/api/Quizzes", createQuiz);
  app.get("/api/Quizzes", findAllQuizzes);
  app.get("/api/Quizzes/findQuizById/:QuizId", findQuizById);
  app.get("/api/Quizzes/getQuizzesByCourseId/:CourseId", findQuizzesByCourseId);
  app.put("/api/Quizzes/updateQuiz/:QuizId", updateQuiz);
  app.delete("/api/Quizzes/deleteQuiz/:QuizId", deleteQuiz);
}
