import { RootState } from '../store';

export const selectFavoritesList = (state: RootState) => state.favorites.list;
export const selectIsFavorite = (state: RootState, movieId: number) =>
  state.favorites.list.some((movie) => movie.id === movieId);
