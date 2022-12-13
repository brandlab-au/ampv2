import logo from './logo.svg';
import './App.css';
// import Counter from './components/counter';
import Counters from './components/counters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='border'>
          Edit <code>src/App.js</code> here we go angain Jonathonn & James.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>Jonathon</span>
        <Counters />
      </header>
    </div>
  );
}

export default App;
