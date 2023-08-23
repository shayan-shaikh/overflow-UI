import React, { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleAddNote = () => {
    setNotes([...notes, '']);
  };

  const handleInputChange = (e, index) => {
    const newNotes = [...notes];
    newNotes[index] = e.target.value;
    setNotes(newNotes);

    if (e.target.value.includes('<>')) {
      setSuggestions(notes.slice(0, -1));
    } else {
      setSuggestions([]);
      if (newNotes[index].includes('<> ')) {
        newNotes[index] = newNotes[index].replace('<>', '');
      }
    }
  };

  const handleSuggestionChange = (e) => {
    const newNotes = [...notes];
    newNotes[newNotes.length - 1] += e.target.value;
    setNotes(newNotes);
    setSuggestions([]);
  };

  return (
    <div style={{ backgroundColor: 'darkblue', padding: '20px' }}>
      <button onClick={handleAddNote}>Create new note</button>
      {notes.map((note, index) => (
        <div key={index}>
          <hr />
          <textarea
            value={note}
            onChange={(e) => handleInputChange(e, index)}
            style={{ backgroundColor: 'cyan' }}
          />
        </div>
      ))}
      {suggestions.length > 0 && (
        <select onChange={handleSuggestionChange}>
          <option value="">Select a suggestion</option>
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion}>
              {suggestion}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default App;
