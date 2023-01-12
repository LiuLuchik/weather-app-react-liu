import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <a
            className="App-link"
            href="https://github.com/LiuLuchik/weather-app-react-liu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
        </footer>
      </div>
    </div>
  );
}
