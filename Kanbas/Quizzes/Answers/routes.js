import * as dao from "./dao.js";
export default function UserRoutes(app) {
    const createAnswer = async (req, res) => {
        try {
            const ans = await dao.createAnswer(req.body);
        res.json(ans);
        } catch (e) {
            console.log(e)
        }
        
      };
    const deleteAnswer = async (req, res) => {
        const status = await dao.deleteAnswer(req.params.answerId);
      res.json(status);

    };
    const findAllAnswers = async (req, res) => {
        const answers = await dao.findAllAnswers(req.params.questionId);
        res.json(answers);
      };
      
    const findAnswerById = async (req, res) => { 
        const answer = await dao.findAnswerById(req.params.answerId);
        res.json(answer);
    };
    const updateAnswer = async (req, res) => {
        const { answerId } = req.params;
        const status = await dao.updateAnswer(answerId, req.body);
        res.json(status);
      };
    app.post("/api/answers/:questionId", createAnswer);
    app.get("/api/answers/byQuestion/:questionId", findAllAnswers);
    app.get("/api/answers/:answerId", findAnswerById);
    app.put("/api/answers/:questionId/:answerId", updateAnswer);
    app.delete("/api/answers/:questionId/:answerId", deleteAnswer);
}
