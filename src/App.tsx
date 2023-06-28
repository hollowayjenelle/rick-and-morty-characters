import React from "react";
import "./App.css";
import RouterView from "./RouterView";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <a href="/">All Characters</a>
        </li>
        <li>
          <a href="/favourites">Favourites</a>
        </li>
      </ul>
      <RouterView />
    </div>
  );
}

export default App;
