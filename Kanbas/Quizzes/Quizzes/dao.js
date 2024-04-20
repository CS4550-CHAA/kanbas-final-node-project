import model from "./model.js";
export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.findOne({ id: quizId });
export const findQuizzezByCourse = (courseId) =>
  model.find({ course: courseId });
// export const findQuizByUsername = (username) =>
//   model.findOne({ username: username });
// export const findUserByCredentials = (username, password) =>
//   model.findOne({ username, password });
export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ id: quizId });
