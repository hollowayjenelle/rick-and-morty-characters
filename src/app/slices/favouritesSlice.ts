import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../types";

const initialState: Character[] = [];

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourites: (state, action: PayloadAction<Character>) => {
      state.push(action.payload);
    },
    deleteFavourite: (state, action: PayloadAction<number>) => {
      state = state.filter((character) => character.id !== action.payload);
      return state;
    },
  },
});

export const { addFavourites, deleteFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
