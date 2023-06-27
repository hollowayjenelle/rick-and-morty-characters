import React from "react";
import "./App.css";
import RouterView from "./RouterView";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <a href="http://localhost:3000/">All Characters</a>
        </li>
        <li>
          <a href="http://localhost:3000/favourites">Favourites</a>
        </li>
      </ul>
      <RouterView />
    </div>
  );
}

export default App;
