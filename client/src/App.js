import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Auth(LandingPage, null)} />
        <Route path="/login" element={Auth(LoginPage, false)} />
        <Route path="/register" element={Auth(RegisterPage, false)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
