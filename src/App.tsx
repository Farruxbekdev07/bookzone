import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes?.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
