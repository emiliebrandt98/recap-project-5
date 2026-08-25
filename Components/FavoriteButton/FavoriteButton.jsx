import { Heart } from "lucide-react";

export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  console.log();
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-label="favorite toggle"
    >
      <Heart color={"red"} fill={isFavorite ? "red" : "none"} />
    </button>
  );
}
