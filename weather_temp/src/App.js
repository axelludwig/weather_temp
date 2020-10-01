import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Chiasse from './Chiasse';

function App() {


    var t = (
        <div>
            <p> caca</p>
        </div>
    )

    return (
        <div className="App">
            {t}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
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

            <Chiasse test='salut' />
        </div>
    );
}

export default App;
