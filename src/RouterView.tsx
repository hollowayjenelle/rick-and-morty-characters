import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharactersView from "./pages/CharactersView";
import FavouritesView from "./pages/FavouritesView";

const RouterView: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersView />} />
        <Route path="/favourites" element={<FavouritesView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterView;
