import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <Sidebar/>
      </header>
    </div>
  );
}

export default App;
