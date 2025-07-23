import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies, setSearchQuery } from '../redux/movies/moviesSlice';
import {
  selectMoviesList,
  selectMoviesLoading,
  selectMoviesError,
  selectMoviesSearchQuery,
} from '../redux/movies/moviesSelectors';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const dispatch = useDispatch<any>();

  const list = useSelector(selectMoviesList);
  const searchQuery = useSelector(selectMoviesSearchQuery);
  
  const filteredMovies = list?.filter((movie) =>
    movie?.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  useEffect(() => {
    dispatch(getPopularMovies());
  },[filteredMovies, dispatch]);

  
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={(text) => dispatch(setSearchQuery(text))}
      />
    
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard movie={item} />}
            numColumns={2} 
          contentContainerStyle={ {paddingBottom: 20} }
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#000a29',
    paddingTop: 10,
  },
  error: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
