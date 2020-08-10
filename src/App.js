import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const handleClick = () => {
        axios
            .get('/ping')
            .then((res) => {
                console.log('response:', res);
            })
            .catch((err) => {
                console.log('error:', err);
            });
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    <button onClick={handleClick}>Click on me</button>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
