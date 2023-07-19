import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "../container/login";
import useApp from "./useApp";

const App = () => {
  const { rootState } = useApp();
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
