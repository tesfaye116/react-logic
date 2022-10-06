import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import UserData from "./components/UserData";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="w-100 flex justify-center mx-auto px-4">
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/users" exact element={<UserData />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;