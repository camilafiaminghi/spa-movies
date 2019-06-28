import React from 'react';
import './App.scss';
import InfosList from './components/InfosList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        	Frontend Test Task.
        </p>
        <p>
        	Movies, categories, actors and info.
        </p>
        <InfosList></InfosList>
      </header>
    </div>
  );
}

export default App;
