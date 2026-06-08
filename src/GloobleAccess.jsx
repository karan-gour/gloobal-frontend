import React, { useState } from 'react';
import './GloobleAccess.css'; // This links your new styling file!

export default function GloobleAccess({ onComplete }) {
  const [name, setName] = useState('');
  const [referrer, setReferrer] = useState('');
  const [symbols, setSymbols] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  const keys = ['+', '-', '×', '=', '□', '■', '○', '●'];

  const handleKeyPress = (char) => {
    if (symbols.length < 12) setSymbols([...symbols, char]);
  };

  const handleDelete = () => setSymbols(symbols.slice(0, -1));

  const handleSubmit = () => {
    if (symbols.length > 0 && name.trim() !== '') {
      onComplete(symbols.join(''));
    } else {
      alert("Please enter your Documented Name and at least 1 symbol.");
    }
  };

  const renderDisplay = () => {
    const slots = [];
    for (let i = 0; i < 12; i++) {
      if (i < symbols.length) {
        slots.push(<span key={i}>{isHidden ? '*' : symbols[i]}</span>);
      } else {
        slots.push(<span key={i} style={{ color: '#9ca3af' }}>-</span>);
      }
    }
    return slots;
  };

  return (
    <div className="ga-wrapper">
      <div className="ga-card">
        
        <h2 className="ga-title">Glooble Access</h2>

        <input
          type="text"
          className="ga-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Documented Name"
        />

        <div>
          <div className="ga-id-header">
            <span>12-Symbol Secure ID</span>
            <span>{symbols.length} / 12</span>
          </div>
          
          <div className="ga-display-box">
            <div className="ga-symbols">{renderDisplay()}</div>
            <button className="ga-hide-btn" onClick={() => setIsHidden(!isHidden)}>
              {isHidden ? '🙈' : '🐵'}
            </button>
          </div>
        </div>

        <input
          type="text"
          className="ga-input"
          value={referrer}
          onChange={(e) => setReferrer(e.target.value)}
          placeholder="Referrer Wallet (Optional)"
        />

        <div className="ga-keypad-container">
          <div className="ga-grid">
            {keys.map((char) => (
              <button key={char} onClick={() => handleKeyPress(char)} className="ga-btn">
                {char}
              </button>
            ))}
            <button onClick={handleDelete} className="ga-btn ga-btn-del">⌫</button>
            <button onClick={() => handleKeyPress('Φ')} className="ga-btn ga-btn-phi">Φ</button>
            <button onClick={handleSubmit} className="ga-btn ga-btn-submit">⇌</button>
          </div>
        </div>

        <div className="ga-footer">
          <span style={{ color: '#ef4444' }}>❤️</span> from भारत
        </div>

      </div>
    </div>
  );
}