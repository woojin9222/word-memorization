import React, { useState } from 'react';

function WordList({ words, addWords, setQuizMode }) {
  const [input, setInput] = useState('');

  const handleAddWords = () => {
    addWords(input);
    setInput('');
  };

  return (
    <div>
      <h2>Enter words to memorize (format: word:meaning,word:meaning,...)</h2>
      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter words and meanings separated by commas"
      ></textarea>
      <br />
      <button onClick={handleAddWords}>Add Words</button>
      <button onClick={() => setQuizMode(true)}>Start Quiz</button>
      <h3>Word List</h3>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word.term} - {word.meaning}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;
