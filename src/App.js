import './App.css';

import {Shakes} from "./props/prop.js";
import { NewComponent } from './props/prop.js';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header> */}

      My Favourite Album is...
      <Shakes/>
      <NewComponent name="der"/>
      <p>children</p>
    </div>
  );
}

export default App;
