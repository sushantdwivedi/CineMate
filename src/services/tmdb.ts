import { Movie } from '../types/Movie';

import { TMDB_BEARER, API_URL } from '@env';



export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${API_URL}/movie/popular`, {
    headers: {
        Authorization: `Bearer ${TMDB_BEARER}`
    }
  }); 

  if (!res.ok) throw new Error('Failed to fetch movies');
  const json = await res.json();
  return json.results;
};

