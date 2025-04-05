import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp, SignIn } from "./components";

import CornChat from "./pages/cornChat/cornChat";

// TEMPORARY

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cornChat" element={<CornChat />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
