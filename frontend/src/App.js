// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RecipePage from "./pages/RecipePage/RecipePage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import EditRecipePage from "./pages/EditRecipePage/EditRecipePage";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/edit/:id" element={<EditRecipePage />} />
        <Route path="/addrecipe/" element={<AddRecipePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
