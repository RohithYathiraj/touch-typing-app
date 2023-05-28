import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startExercise, checkCompletion, updateInput, resetExercise } from './actions';

import './App.css';

const App = ({
  exercise,
  input,
  timer,
  accuracy,
  completed,
  startExercise,
  checkCompletion,
  updateInput,
  resetExercise
}) => {
  useEffect(() => {
    if (completed) {
      // Exercise completed, you can handle it here (e.g., calculate statistics, store results, etc.)
      console.log('Exercise completed!');
    }
  }, [completed]);

  const handleChange = (e) => {
    const { value } = e.target;
    updateInput(value);
    checkCompletion(exercise, value);
  };

  const handleStart = () => {
    resetExercise();
    startExercise();
  };

  return (
    <div className="App">
      <h1>Touch Typing Practice</h1>
     
      <p>Type the following exercise:</p>
      <p>{exercise}</p>
      <input type="text" value={input} onChange={handleChange} autoFocus />
      <p>Time: {timer} seconds</p>
      <p>Accuracy: {accuracy}%</p>
      {!exercise && (
        <button onClick={handleStart}>Start Exercise</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exercise: state.exercise,
    input: state.input,
    timer: state.timer,
    accuracy: state.accuracy,
    completed: state.completed
  };
};

const mapDispatchToProps = {
  startExercise,
  checkCompletion,
  updateInput,
  resetExercise
};

export default connect(mapStateToProps, mapDispatchToProps)(App);