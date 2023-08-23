import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(null);

  const handleAddItem = () => {
    setItems([...items, '']);
  };

  const handleInputChange = (e, index) => {
    const newItems = [...items];
    newItems[index] = e.target.value;
    setItems(newItems);

    if (e.target.value.includes('<>')) {
      setSuggestions(newItems.slice(0, index));
      setSelectedSuggestionIndex(index);
    } else {
      setSuggestions([]);
      setSelectedSuggestionIndex(null);
    }

    if (e.target.value.endsWith('<>')) {
      newItems[index] = newItems[index].slice(0, -2);
      setItems(newItems);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const newItems = [...items];
    newItems[selectedSuggestionIndex] = `${newItems[selectedSuggestionIndex]}${suggestion}`;
    setItems(newItems);
    setSuggestions([]);
    setSelectedSuggestionIndex(null);
  };

  return (
    <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '20px' }}>
      <h1>Welcome to the assignment</h1>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map((item, index) => (
        <div key={index}>
          <hr />
          <input
            type="text"
            value={item}
            onChange={(e) => handleInputChange(e, index)}
            style={{ color: index === selectedSuggestionIndex ? 'red' : 'black' }}
          />
        </div>
      ))}
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
