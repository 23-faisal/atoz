import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/sonner";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* user layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* admin layout */}
          <Route></Route>
        </Routes>

        <Toaster position="top-right" />
      </Router>
    </>
  );
}

export default App;
