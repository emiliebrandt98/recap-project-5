import { useRouter } from "next/router";
import ArtPieceDetails from "@/Components/ArtPieceDetails/ArtPieceDetails.jsx";

export default function DetailsPage({ artPieces, isLoading, error }) {
  const router = useRouter();
  const { slug } = router.query;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const currentArtPiece = artPieces?.find((artPiece) => artPiece.slug === slug);

  if (!currentArtPiece) return <p>Art piece not found</p>;

  return <ArtPieceDetails artPiece={currentArtPiece} />;
}
