import React, { useState } from 'react';
import WordList from './WordList';
import WordQuiz from './WordQuiz';
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  const [quizMode, setQuizMode] = useState(false);

  const addWords = (wordString) => {
    const wordArray = wordString.split(',').map(word => {
      const [term, meaning] = word.split(':').map(item => item.trim());
      return { term, meaning };
    });
    setWords(wordArray);
  };

  return (
    <div className="App">
      <h1>Word Memorization</h1>
      {quizMode ? (
        <WordQuiz words={words} setQuizMode={setQuizMode} />
      ) : (
        <WordList words={words} addWords={addWords} setQuizMode={setQuizMode} />
      )}
    </div>
  );
}

export default App;
