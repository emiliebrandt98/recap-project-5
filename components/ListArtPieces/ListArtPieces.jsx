import ArtPieceCard from "../ArtPieceCard/ArtPieceCard";

export default function ListArtPieces({
  artPieces,
  isLoading,
  error,
  onToggleFavorite,
  isFavorite,
}) {
  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Failed to load.</p>;

  return (
    <ul>
      {artPieces?.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPieceCard
            artPiece={artPiece}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
