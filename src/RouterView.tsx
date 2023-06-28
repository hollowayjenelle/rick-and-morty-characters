import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharactersView from "./pages/CharactersView";
import FavouritesView from "./pages/FavouritesView";
import CharacterDetail from "./pages/CharacterDetail";

const RouterView: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersView />} />
        <Route path="/favourites" element={<FavouritesView />} />
        <Route path="/character/:id" element={<CharacterDetail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterView;
