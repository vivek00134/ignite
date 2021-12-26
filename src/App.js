import React from "react";

//Components and pages
import Home from "./pages/Home";

//Styled
import GlobalStyles from "./components/GlobalStyles";

//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
