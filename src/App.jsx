import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Owners from "./pages/Owner";
import Properties from "./pages/Properties";
import Students from "./pages/Student";
import Home from "./pages/Home";
import PropertyList from "./pages/PropertyList";
import PropertyDetails from "./pages/PropertyDetails";
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerProperties from "./pages/OwnerProperties";
import AddProperty from "./pages/AddProperty";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './index.css';
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/owners" element={<Owners />} />
        <Route path="/admin/properties" element={<Properties />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="/owner/properties" element={<OwnerProperties />} />
        <Route path="/owner/add-property" element={<AddProperty />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
