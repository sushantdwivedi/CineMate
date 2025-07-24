# 🎬 CineMate
 ![CineMate](https://github.com/sushantdwivedi/CineMate/blob/main/src/assets/screenshots/CineMateLogo.png?raw=true)
CineMate is a simple and elegant Movie Explorer app built with **React Native CLI** (without Expo) using **TypeScript** and **Redux Toolkit**. The app allows users to browse a list of popular movies, view detailed information, and manage a list of favorite movies — with full support for **Android**.

---

## ✨ Features

- 📃 **Home Screen**
  - Displays a list of popular movies using TMDb API
  - Shows poster, title, rating, and release year
  - Includes real-time search functionality using Redux state

- 🎥 **Movie Details Screen**
  - Displays large poster, title, description, genres, and release date
  - Toggle “Add to Favorites” functionality

- ❤️ **Favorites Management**
  - Mark/unmark movies as favorite
  - Uses **Redux** for state management
  - Favorites persist across app restarts using **redux-persist**

---

## 📸 Screenshots

| Home Screen  | Movie Details |
|-------------|----------------|
| ![Home](https://github.com/sushantdwivedi/CineMate/blob/main/src/assets/screenshots/HomeScreen.jpeg?raw=true) | ![Details](https://github.com/sushantdwivedi/CineMate/blob/main/src/assets/screenshots/DetailScreen.jpeg?raw=true) |


---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Android Studio / Android emulator
- React Native CLI (`npm install -g react-native-cli`)
- TMDb API Key (create `.env` file as shown below)

### Clone & Setup

```bash
git clone https://github.com/sushantdwivedi/CineMate.git
cd CineMate
npm install
```


---

 ### Add Environment Variables
 ### Create a .env file in the root:

API_URL=https://api.themoviedb.org/3

TMDB_BEARER=YOUR_TMDB_BEARER_TOKEN



### Run on Android
npx react-native run-android



### Tech Stack
React Native (CLI) — v0.80.1

TypeScript — For type safety and cleaner code

Redux Toolkit — Modern and simplified state management

Redux Persist — To persist favorite movies across app restarts

React Navigation — For navigating between screens

TMDb API — For fetching movie data

@react-native-async-storage/async-storage — Used with redux-persist

react-native-vector-icons — Icons used across the UI



### Folder Structure

```text
src/
├── components/         # Reusable UI components (MovieCard, FavoriteButton, SearchBar)
├── screens/            # HomeScreen and MovieDetailScreen
├── redux/              # Redux slices for movies and favorites
├── services/           # API service (fetchPopularMovies)
├── types/              # Type definitions (e.g., Movie type)
App.tsx                 # Root component with navigation
```



### 📦 State Management Overview

**🧠 Movies Slice** (`redux/slices/moviesSlice.ts`)  
- Fetches and stores popular movies  
- Supports real-time search via `searchQuery` state  

**⭐ Favorites Slice** (`redux/slices/favoritesSlice.ts`)  
- Manages the list of favorite movies  
- Handles add/remove actions  
- Persists data using `redux-persist`  

**🧰 Selectors**
```ts
selectFavoritesList(state: RootState)
selectIsFavorite(state: RootState, movieId: number)
selectMoviesList(state: RootState)
```



### Assignment Requirements Covered
 Used React Native CLI (No Expo)

 App written in TypeScript

 Redux for state management

 redux-persist for favorite persistence

 Axios-like fetch for dynamic data (via TMDb API)

 Clear and maintainable code structure

 Android build works via npx react-native run-android

 Screenshots included

 No UI libraries used


### UI Inspiration
No external UI kit used

Custom components and styling for clean and minimal design



### Custom Components
MovieCard.tsx — Displays movie preview in the list

FavoriteButton.tsx — Toggle favorite icon/button

SearchBar.tsx — Real-time search input




### Contributing
This project was developed as part of a React Native Developer Assignment.

Feel free to fork, raise issues, or suggest improvements!


### License
This project is for educational/recruitment purposes and not intended for production deployment.



### Contact
Made with ❤️ by Sushant Dwivedi

GitHub: @sushantdwivedi
