import React, { useState } from 'react';

function WordQuiz({ words, setQuizMode }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [correctCount, setCorrectCount] = useState(0);

  const handleCheckAnswer = () => {
    if (answer.toLowerCase() === words[index].meaning.toLowerCase()) {
      setCorrectCount(correctCount + 1);
    }
    setAnswer('');
    setIndex(index + 1);
  };

  if (index >= words.length) {
    return (
      <div>
        <h2>Quiz Complete!</h2>
        <p>You got {correctCount} out of {words.length} correct.</p>
        <button onClick={() => setQuizMode(false)}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Word Quiz</h2>
      <p>What is the meaning of: {words[index].term}?</p>
      <input 
        type="text" 
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleCheckAnswer}>Check Answer</button>
    </div>
  );
}

export default WordQuiz;
