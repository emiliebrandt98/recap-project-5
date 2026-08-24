import useSWR from "swr";
import ArtPieceCard from "../ArtPieceCard/ArtPieceCard";

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

export default function ListArtPieces() {
  const { data: art, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return "loading ...";
  }

  if (error) {
    return "failed to load.";
  }

  return (
    <ul>
      {art.map((piece) => (
        <li key={piece.slug}>
          <ArtPieceCard piece={piece} />
        </li>
      ))}
    </ul>
  );
}
