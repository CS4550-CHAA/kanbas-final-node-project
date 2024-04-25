import model from "./model.js";
export const createAnswer = (answer) => {
    return model.create(answer);
  }
export const findAnswerById = (answerId) => model.findById(answerId);
export const findAllAnswers = (questionId) => model.find({ questionId: questionId });
export const updateAnswer = (answerId, answer) =>  model.findByIdAndUpdate(answerId, { $set: answer });
export const deleteAnswer = (answerId) => model.deleteOne({ _id: answerId });