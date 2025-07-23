import React from 'react';
import {
  View,
  Text,
  Image, 
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

import { RootStackParamList } from '../navigation/AppNavigator';
import { RootState } from '../redux/store';
import { addFavorite, removeFavorite } from '../redux/favorites/favoritesSlice';
import { selectIsFavorite } from '../redux/favorites/favoritesSelectors';
import { selectMoviesList } from '../redux/movies/moviesSelectors';
import FavoriteButton from '../components/FavoriteButton';

type RouteParams = RouteProp<RootStackParamList, 'MovieDetails'>;
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MovieDetailsScreen = () => {
  const { movieId } = useRoute<RouteParams>().params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const movie = useSelector((state: RootState) =>
    selectMoviesList(state).find((m) => m.id === movieId)
  );
  const isFavorite = useSelector((state: RootState) =>
    selectIsFavorite(state, movieId)
  );

  const toggleFavorite = () => {
    if (movie) {
      if (isFavorite) {
        dispatch(removeFavorite(movie.id));
      } else {
        dispatch(addFavorite(movie));
      }
    }
  };
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  if (!movie) {
    return null;
  }

  const backdropUri = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;
  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <ImageBackground
          source={{ uri: movie.backdrop_path ? backdropUri : posterUri }}
          style={styles.backdrop}
        >
          <LinearGradient
            colors={['transparent', 'rgba(18,18,18,0.6)', '#121212']}
            style={styles.gradient}
          />
        </ImageBackground>

        <TouchableOpacity
          style={[styles.backButton, { top: insets.top + 10 }]}
onPress={() => {
  if (navigation.canGoBack()) {
    navigation.pop();
  } else {
    navigation.navigate('Home'); 
  }
}}
        >
          <BlurView style={styles.blurView} blurType="light" blurAmount={10}>
<Image source={require('../assets/icons/Back-1.png')} style={{ width: "70%", height: "70%" }} />
          </BlurView>
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          <View style={styles.topSection}>
            <Image source={{ uri: posterUri }} style={styles.poster} />
            <View style={styles.detailsColumn}>
              <Text style={styles.title}>{movie.title}</Text>
              <View style={styles.metaContainer}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaText}>
                    ⭐ {movie.vote_average.toFixed(1)}
                  </Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaText}>
                    {new Date(movie.release_date).getFullYear()}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={toggleFavorite}
            style={styles.favoriteButton}
          />

          <Text style={styles.overviewHeader}>Overview</Text>
          <Text style={styles.description}>
            {movie.overview || 'No description available.'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  backdrop: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.5,
    position: 'absolute',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    borderRadius: 40,
    overflow: 'hidden',
    width: 40,
    height: 40,
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 16,
    marginTop: SCREEN_HEIGHT * 0.25, 
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  poster: {
    width: 145,
    height: 210, 
    borderRadius: 22,
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 0, 0.1)',
  },
  detailsColumn: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    gap: 10,
  },
  metaItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  metaText: {
    color: '#e0e0e0',
    fontWeight: '600',
    fontSize: 14,
  },
  favoriteButton: {
    marginVertical: 12,
    alignSelf: 'stretch', 
  },
  overviewHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    color: '#ccc',
    fontSize: 13,
    lineHeight: 24,
  },
});

export default MovieDetailsScreen;