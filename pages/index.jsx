import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({
  artPieces,
  onToggleFavorite,
  isFavorite,
  isLoading,
}) {
  return (
    <Spotlight
      artPieces={artPieces}
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
      isLoading={isLoading}
    />
  );
}
