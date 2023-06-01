import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          Learn React in less than a day
        </a>
      </header>
      <main></main>
      <footer>
        (c) 2023 made by <a href="https://ulatov.com" target="_blank" rel="noreferrer">me</a>
      </footer>
    </div>
  );
}

export default App;
