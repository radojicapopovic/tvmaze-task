import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { ShowPage } from "./pages/Show/ShowPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows/:id" element={<ShowPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
