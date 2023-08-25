import React, { useState } from "react";
import "../components/todo.css";

function InputElem(props) {
    const [inputText, setInputText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleInputChange = (event) => {
        const newText = event.target.value;
        setInputText(newText);

        if (newText.endsWith('<> ')) {
            const filteredSuggestions = props.listTodo;
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        const updatedText = inputText + suggestion;
        setInputText(updatedText);
        setSuggestions([]);
        setShowSuggestions(false);
    };

    return (

        <div className="input-container">
            <input
                type="text"
                className="input-box-todo"
                placeholder="Enter any text"
                value={inputText}
                onChange={handleInputChange}
            />
            {showSuggestions && (
                <ul className="suggestion-list">
                    {suggestions.map((suggestionItem, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestionItem)}
                            updatedText={suggestions}
                        >
                            {suggestionItem}
                        </li>
                    ))}
                </ul>
            )}
            <button
                className="add-btn"
                onClick={() => {
                    props.addList(inputText);
                    setInputText('');
                }}
            >
                +
            </button>
        </div>
    );
}

export default InputElem;