const initialState = {
    exercise: '',
    input: '',
    timer: 0,
    accuracy: 100,
    completed: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'START_EXERCISE':
        return {
          ...state,
          exercise: generateExercise(30), // Generate a random exercise with the eight keys (asdfjkl;)
          timer: 0,
          accuracy: 100,
          completed: false
        };
      case 'CHECK_COMPLETION':
        const { exercise, input } = action.payload;
        const completed = input === exercise;
        return {
          ...state,
          accuracy: calculateAccuracy(exercise, input),
          completed
        };
      case 'UPDATE_INPUT':
        const { input: newInput } = action.payload;
        return {
          ...state,
          input: newInput
        };
      case 'RESET_EXERCISE':
        return {
          ...state,
          exercise: '',
          input: '',
          timer: 0,
          accuracy: 100,
          completed: false
        };
      default:
        return state;
    }
  };
  
  const generateExercise = (length) => {
    const keys = 'asdfjkl;';
    let exercise = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * keys.length);
      exercise += keys[randomIndex];
    }
    return exercise;
  };
  
  const calculateAccuracy = (exercise, input) => {
    const exerciseLength = exercise.length;
    let accurateCharacters = 0;
    for (let i = 0; i < exerciseLength; i++) {
      if (exercise[i] === input[i]) {
        accurateCharacters++;
      }
    }
    const accuracyPercentage = (accurateCharacters / exerciseLength) * 100;
    return accuracyPercentage.toFixed(2);
  };
  
  export default reducer;
  