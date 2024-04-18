import * as dao from './dao.js';

export default function QuestionRoutes(app) {

    const createQuestion = async (req, res) => {
        const question = req.body;
        const result = await dao.createQuestion(question);
        res.json(result);
    };
    app.post("/api/questions", createQuestion);


    const findAllQuestions =  async (req, res) => {
        const questions = await dao.findAllQuestions();
        res.json(questions);
    }
    app.get("/api/questions", findAllQuestions);

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