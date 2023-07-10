import { createSlice } from "@reduxjs/toolkit";

// Retrieve the favorites from the local storage if available
const storedFavorites = localStorage.getItem("favorites");
const initialState = storedFavorites ? JSON.parse(storedFavorites) : [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const existingIndex = state.findIndex((r) => r.id === recipe.id);
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(recipe);
      }

      // Save the updated favorites to the local storage
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const { actions, reducer } = favoritesSlice;
