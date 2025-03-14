import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* user layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
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
