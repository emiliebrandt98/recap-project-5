import ListArtPieces from "@/Components/ListArtPieces/ListArtPieces";

export default function Gallery({
  artPieces,
  isLoading,
  error,
  onToggleFavorite,
  isFavorite,
}) {
  console.log();
  return (
    <div>
      <h1>Art Gallery</h1>
      <ListArtPieces
        artPieces={artPieces}
        isLoading={isLoading}
        error={error}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
