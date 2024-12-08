import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/container/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import VerifyEmail from "./components/Auth/VerifyEmail/VerifyEmail";
import VerifySuccessMsg from "./components/Auth/VerifyEmail/VerifySuccessMsg";
import DashBoardLayout from "./components/DashBoard/DashBoardLayout";
import Dashboard from "./components/DashBoard/Dashboard";
import Settings from "./components/DashBoard/Settings";
import Members from "./components/DashBoard/Members";
import Bands from "./components/DashBoard/Bands";
import Units from "./components/DashBoard/Units";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/email-verify" element={<VerifyEmail />} />
      <Route path="/email-verified" element={<VerifySuccessMsg />} />
      <Route path="/dashboard" element={<DashBoardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="bands" element={<Bands />} />
        <Route path="units" element={<Units />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
