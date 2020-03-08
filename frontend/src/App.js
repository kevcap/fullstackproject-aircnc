import React, { useState } from 'react';
import './App.css';
import api from './services/api'

import logo from './assets/logo.svg'

function App() {
  const [email, setEmail] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post('/sessions', { email });
    
    console.log(response);
    
  }
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p>
          Offer <strong>spots</strong> to developers and find <strong>talents</strong> to your company
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Your best e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default App;
