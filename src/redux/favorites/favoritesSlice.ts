import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/Movie';

interface FavoritesState {
  list: Movie[];
}

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Movie>) {
      const exists = state.list.find((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.list = state.list.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
