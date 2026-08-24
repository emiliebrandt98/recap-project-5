import GlobalStyle from "../styles";
import Navigation from "../Components/Navigation/Navigation.jsx";
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

  // Handler-Function
  const [isFavorite, setIsFavorite] = useLocalStorageState("isFavorite", {
    defaultValue: [],
  });

  function handleToggleFavorite(slug) {
    setIsFavorite((prevInfo) => {
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
      />
      <Navigation />
    </>
  );
}
