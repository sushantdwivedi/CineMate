import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Platform,
  LayoutAnimation, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'react-native-linear-gradient'; 
import { Movie } from '../types/Movie';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  movie: Movie;
};

const { width } = Dimensions.get('window');

const CARD_WIDTH = (width * 0.95 - 20) / 2; 
const CARD_HEIGHT = CARD_WIDTH * 1.5; 

const MovieCard = ({ movie }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MovieDetails', { movieId: movie.id })}
    >
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.poster}
        imageStyle={{ borderRadius: 30 }} 
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        >
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
              {movie.title}
            </Text>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
             <Text style={styles.subtitle}>
              ⭐ {movie.vote_average.toFixed(1)}
            </Text>
            <Text style={styles.subtitle}>
                {new Date(movie.release_date).getFullYear()}
            </Text>
           </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
    marginLeft: 14,
 
  },
  poster: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', 
  },
  gradient: {
    width: '100%',
    height: '40%', 
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  info: {
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    color: '#e0e0e0',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
});

export default MovieCard;