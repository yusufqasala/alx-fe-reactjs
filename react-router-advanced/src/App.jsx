import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute ";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<Profile />} />

      <Route path="/" element={<Home />} />
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/profile/:userId" element={<User />} />
    </Routes>
  );
};

export default App;
