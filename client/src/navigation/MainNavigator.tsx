import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Signup from "../pages/Signup/Signup";

function MainNavigator() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default MainNavigator;
