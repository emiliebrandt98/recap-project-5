import GlobalStyle from "../styles";
import Navigation from "../Components/Navigation/Navigation.jsx";
import useSWR from "swr";

// import useState
import { useState } from "react";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

const url = "https://example-apis.vercel.app/api/art";


export default function App({ Component, pageProps }) {
  const { data: artPieces, error, isLoading } = useSWR(url, fetcher);

  // start with empty array
  const [favorites, setFavorites] = useState([]);

  // onToggleFavorite={toggleFavorite}
  // favourites // export default function FavoritesPage({favoriteArtPieces, onToggleFavorite}) {
  function handleToggleFavorite(artPiece) {
  setFavorites((currentArtPieces) => {
    const isFavorite = currentArtPieces.some(
      (favorite) => favorite.slug === artPiece.slug
    );

    if (isFavorite) {
      return currentArtPieces.filter(
        (favorite) => favorite.slug !== artPiece.slug
      );
    }

    return [...currentArtPieces, artPiece];
  });
}

// add to Components: 
// favoriteArtPieces={favorites}
// onToggleFavorite={toggleFavorite}

// add FavoritePage
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        isLoading={isLoading}
        error={error}
        favoriteArtPieces={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
      <Navigation />
    </>
  );
}
