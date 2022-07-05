import logo from "./logo.svg";
import "./App.css";
import Radio from "./components/Radio";

function App() {
  return (
    <>
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
            Learn React
          </a>
        </header>
      </div>
      <Radio label="Laranja" value="laranja" name="frutas" labelFor="laranja" />
      <Radio label="Maçã" value="maca" name="frutas" labelFor="maca" />
      <Radio label="Banana" value="banana" name="frutas" labelFor="banana" />
    </>
  );
}

export default App;
