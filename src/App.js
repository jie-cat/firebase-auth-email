import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
// context
import { UserContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Firebase & Authentication
      </h1>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
