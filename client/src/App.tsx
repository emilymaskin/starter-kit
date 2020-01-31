import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('Loading...');

  const callAPI = async () => {
    const res = await fetch('http://localhost:3001/testAPI');
    const text = await res.text();
    setApiResponse(text);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;
