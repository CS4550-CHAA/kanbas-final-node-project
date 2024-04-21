import model from "./model.js";
export const createQuestion = (question) => model.create(question);
export const findAllQuestionsForQuiz = (quizId) => model.find({ quizId: quizId });
export const findQuestionById = (questionId) => model.findOne({id: questionId});
export const updateQuestion = (questionId, question) =>  model.updateOne({ id: questionId }, { $set: question });
export const deleteQuestion = (id) => model.deleteOne({ id: id });