/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/slices/AuthSlice";
import paths from "./constants/paths";
import { getUsers } from "./utils";
import { useQuery } from "@tanstack/react-query";
import { api } from "./utils/api";
import { Box } from "@mui/material";
import axios from "axios";
const { baseUrl, usersApi } = api;

function App() {
  const token = useSelector((state: any) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { LOG_IN } = paths;
  const usersApiUrl = baseUrl + usersApi;

  const { refetch, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(usersApiUrl, token),
  });

  React.useEffect(() => {
    refetch();
    if (axios.isAxiosError(error)) {
      const status = error?.response?.status;
      if (status === 401) {
        dispatch(logout());
        navigate(LOG_IN);
        toast.error(error.response?.data?.error);
      }
    }
  }, [isLoading, isError]);

  if (token) {
    return (
      <Box className="App">
        <ToastContainer />
        <Routes>
          {publicRoutes?.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Routes>
      </Box>
    );
  }

  return (
    <Box className="App">
      <ToastContainer />
      <Routes>
        {privateRoutes?.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
      </Routes>
    </Box>
  );
}

export default App;
