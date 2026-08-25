import GlobalStyle from "../styles";
import Navigation from "../components/Navigation/Navigation.jsx";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

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
  const [artPiecesFavorite, setArtPiecesFavorite] = useLocalStorageState(
    "artPieceInfo",
    { defaultValue: [] }
  );

  // Handler function
  function handleToggleFavorite(slug) {
    // preInfo = current State before update
    setArtPiecesFavorite((currentArtPieces) => {
      // info = search array to see if a matching artPiece already exists
      const isFavoriteArtPiece = currentArtPieces.find(
        (artPiece) => artPiece.slug === slug
      );
      // if artPiece is already inside the array
      if (isFavoriteArtPiece) {
        // map = create a new array
        return currentArtPieces.map((artPiece) =>
          // Does the slug fit? Yes: copy object and change isFavorite
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : // Doesn't fit? Yes: object dosen't change
              artPiece
        );
      }
      // The artPiece is NOT YET in the state => A new array is created that contains
      // all previous elements plus a new object at the end.
      return [...currentArtPieces, { slug, isFavorite: true }];
    });
  }

  // Helper function, if slug isn't inside the array (undefined) === false
  function isFavorite(slug) {
    return (
      artPiecesFavorite.find((piece) => piece.slug === slug)?.isFavorite ??
      false
    );
  }

  // Returns a filtered array with all complete art piece objects
  // (including name, artist, imageSource, etc.) whose status is set to isFavorite: true."
  const favoriteArtPiece = artPieces?.filter((artPiece) =>
    artPiecesFavorite.some(
      (favorite) => favorite.slug === artPiece.slug && favorite.isFavorite
    )
  );

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
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
        favoriteArtPieces={favoriteArtPiece}
      />
      <Navigation />
    </>
  );
}
