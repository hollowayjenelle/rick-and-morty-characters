import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharactersView from "./pages/CharactersView";

const RouterView: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<CharactersView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterView;
