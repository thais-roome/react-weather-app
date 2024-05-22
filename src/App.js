import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather />
        <footer>
          This project was coded by {""}
          <a href="https://www.linkedin.com/in/thais-szimanski-82ab97262/">
            Thais Roome
          </a>
          {""} and is {""}
          <a href="https://github.com/thais-roome/react-weather-app">
            {""} open-sourced on GitHub,
          </a>{" "}
          hosted on{" "}
          <a href="https://app.netlify.com/teams/thais-roome/builds/664dc8450ea540e094152000">
            Netlify
          </a>
          👩🏻‍💻
        </footer>
      </div>
    </div>
  );
}
