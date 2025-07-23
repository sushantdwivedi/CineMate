// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ animation: 'slide_from_right'}} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
