import React, { useState } from 'react';
import { legendsNames } from '../data/Legends';
import '../styles/LegendsBar.css';

function LegendsBar({ onLegendSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [legends, setLegends] = useState(legendsNames);

  const formatName = (name) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredSuggestions = legends.filter((legend) =>
        legend.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSubmit(null, suggestion);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (suggestions.length === 0) {
        handleSubmit();
      } else {
        handleSubmit(null, suggestions[0]);
      }
    }
  };

  const handleSubmit = (e, submittedValue='') => {
    e && e.preventDefault();
    const value = formatName((submittedValue || inputValue).trim());
    if (!legends.includes(value)) {
      return;
    }
    setSuggestions([]);

    const updatedLegends = legends.filter(legend => legend !== value);
    setLegends(updatedLegends);
    
    onLegendSubmit(value);

    setTimeout(() => {
      setInputValue('');
    }, 0);
  };

  return (
    <div className="Legends-bar">
        <input
        type="text"
        id="character-guess"
        placeholder="Type legend name ..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        />
        <button id="submit-guess" onClick={handleSubmit}>Submit</button>
    
        {suggestions.length > 0 && (
        <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
            </li>
            ))}
        </ul>
        )}
    </div>
  );
}

export default LegendsBar;

