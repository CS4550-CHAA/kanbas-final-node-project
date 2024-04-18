import model from "./model.js";
export const createQuestion = (question) => model.create(question);
export const findAllQuestions = () => model.find();
export const findQuestionById = (questionId) => model.findById(questionId);
export const updateQuestion = (questionId, question) =>  model.updateOne({ id: questionId }, { $set: question });
export const deleteQuestion = (id) => model.deleteOne({ id: id });