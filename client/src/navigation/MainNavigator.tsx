import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";

function MainNavigator() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default MainNavigator;
