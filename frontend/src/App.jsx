import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* user layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* admin layout */}
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
