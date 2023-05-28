export const startExercise = () => {
    return {
      type: 'START_EXERCISE'
    };
  };
  
  export const checkCompletion = (exercise, input) => {
    return {
      type: 'CHECK_COMPLETION',
      payload: {
        exercise,
        input
      }
    };
  };
  
  export const updateInput = (input) => {
    return {
      type: 'UPDATE_INPUT',
      payload: {
        input
      }
    };
  };
  
  export const resetExercise = () => {
    return {
      type: 'RESET_EXERCISE'
    };
  };
  