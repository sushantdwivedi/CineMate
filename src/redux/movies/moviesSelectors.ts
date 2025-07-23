import { RootState } from '../store';

export const selectMoviesList = (state: RootState) => state.movies.list;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;
export const selectMoviesError = (state: RootState) => state.movies.error;
export const selectMoviesSearchQuery = (state: RootState) => state.movies.searchQuery;
