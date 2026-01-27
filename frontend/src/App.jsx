import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={
             <ProtectedRoute>
                  <HomePage/ > 
             </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App