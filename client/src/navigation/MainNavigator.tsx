import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProject from "../pages/AddProject/AddProject";
import AddStage from "../pages/AddStage/AddStage";

function MainNavigator() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addProject" element={<AddProject />} />
      <Route path="/addStage" element={<AddStage />} />
    </Routes>
  );
}

export default MainNavigator;
