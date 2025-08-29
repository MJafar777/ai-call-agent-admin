import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Leads from "../pages/Leads/ui/Leads";
import Register from "../pages/Auth/Register";
import Operators from "../pages/Operators/ui/Operators";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Operators />} />
      <Route path="/leads" element={<Leads />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
