import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import dependency from "./dependency";

const App = () => {
  const { getAllUsersUseCase } = dependency.user;

  useEffect(() => {
    getAllUsersUseCase
      .execute()
      .then((res) => console.log("Res: ", res))
      .catch((err) => console.log("Err: ", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  );
};

export default App;
