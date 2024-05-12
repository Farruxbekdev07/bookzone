/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/slices/AuthSlice";
import paths from "./constants/paths";

function App() {
  const token = useSelector((state: any) => state.auth.token);
  const expireDate = useSelector((state: any) => state.auth.expireDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { LOG_IN } = paths;
  const newDate = Date.now();
  const expiry = new Date(expireDate).getTime();

  useEffect(() => {
    if (expiry <= newDate) {
      dispatch(logout());
      navigate(LOG_IN);
    }
  }, []);

  if (token) {
    return (
      <div className="App">
        <ToastContainer />
        <Routes>
          {publicRoutes?.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {privateRoutes?.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
