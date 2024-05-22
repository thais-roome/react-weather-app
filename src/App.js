import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>

      <footer>
        This project was coded by
        <a
          href="https://www.linkedin.com/in/thais-szimanski-82ab97262/"
          target="_blank"
        >
          {""} Thais Roome {""}
        </a>
        and is {""}
        <a
          href="https://github.com/thais-roome/react-weather-app"
          target="_blank"
        >
          open-sourced on GitHub,
        </a>{" "}
        hosted on{" "}
        <a
          href="https://app.netlify.com/teams/thais-roome/builds/664dc8450ea540e094152000"
          target="_blank"
        >
          Netlify 👩🏻‍💻
        </a>
      </footer>
    </div>
  );
}
