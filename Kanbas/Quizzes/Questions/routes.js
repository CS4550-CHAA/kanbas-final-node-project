import * as dao from './dao.js';

export default function QuestionRoutes(app) {

    const createQuestion = async (req, res) => {
        const question = req.body;
        const result = await dao.createQuestion(question);
        res.json(result);
    };
    app.post("/api/questions", createQuestion);


    const findAllQuestionsForQuiz =  async (req, res) => {
        const {quizId} = req.params;
        const questions = await dao.findAllQuestionsForQuiz(quizId);
        res.json(questions);
    }
    app.get("/api/questions/:quizId", findAllQuestionsForQuiz);

    const deleteQuestion = async (req, res) => {
        const {questionId} = req.params;
        const result = await dao.deleteQuestion(questionId);
        res.json(result);
    }
    app.delete("/api/questions/:questionId", deleteQuestion);

    const updateQuestion = async (req, res) => {
        const {questionId} = req.params;
        const question = req.body;
        const status = await dao.updateQuestion(questionId, question);
        res.json(status);
    }
    app.put("/api/questions/:questionId", updateQuestion);

}