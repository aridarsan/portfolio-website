import logo from './logo.svg';
import './App.css';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

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
          href="https://wa.me/6281222288153"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp me
        </a>
        <br/>
        <h1 style={{color: "green"}}>
        <AutoTyping
          active // <boolean>
          textRef='Ari Darsan' // <string>
          writeSpeed={150} // <number>
          deleteSpeed={150} // <number>
          delayToWrite={1000} // <number>
          delayToDelete={2000} // <number>
        />
        <BlinkCursor
          active // <boolean>
          blinkSpeed={500} // <number>
        />
        </h1>
      </header>
    </div>
  );
}

export default App;
