export const selectAnswer = (answer) => ({
    type: 'SELECT_ANSWER',
    payload: answer,
  });
  
  export const setCurrentQuestionIndex = (index) => ({
    type: 'SET_CURRENT_QUESTION_INDEX',
    payload: index,
  });
  
  
  