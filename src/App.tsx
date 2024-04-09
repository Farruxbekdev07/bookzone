import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {privateRoutes?.map((route) => (
          <Route
            path={route?.path}
            element={route?.component}
            key={route?.path}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
