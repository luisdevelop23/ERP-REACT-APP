import Dashboard from "../modules/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../modules/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
