const initialState = {
    answers: [],
    currentQuestionIndex: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_ANSWER':
        return {
          ...state,
          answers: [...state.answers, action.payload],
        };
      case 'SET_CURRENT_QUESTION_INDEX':
        return {
          ...state,
          currentQuestionIndex: action.payload,
        };
      
      default:
        return state;
    }
  };
  
  export default rootReducer;
  