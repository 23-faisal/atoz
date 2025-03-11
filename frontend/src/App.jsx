import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* user layout */}
          <Route path="/" element={<UserLayout />}></Route>

          {/* admin layout */}
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
