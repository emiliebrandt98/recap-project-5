import GlobalStyle from "../styles";
import Navigation from "../Components/Navigation/Navigation.jsx";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

// API fetchen and Error Handling
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
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // Handler function
  function handleToggleFavorite(slug) {
    // preInfo = current State before update
    setArtPiecesInfo((prevInfo) => {
      // search
      const info = prevInfo.find((artPiece) => artPiece.slug === slug);
      if (info) {
        return prevInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        );
      }
      return [...prevInfo, { slug, isFavorite: true }];
    });
  }

  // Helper function, if slug isn't inside the array (undefined) === false
  function isFavorite(slug) {
    return (
      artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite ?? false
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        isLoading={isLoading}
        error={error}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Navigation />
    </>
  );
}
