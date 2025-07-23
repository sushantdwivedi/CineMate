import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularMovies } from '../../services/tmdb';
import { Movie } from '../../types/Movie';

interface MoviesState {
  list: Movie[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: MoviesState = {
  list: [],
  loading: false,
  error: null,
  searchQuery: '',
};

export const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPopularMovies();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery } = moviesSlice.actions;
export default moviesSlice.reducer;
