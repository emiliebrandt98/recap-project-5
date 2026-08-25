import Image from "next/image";
import { Heart } from "lucide-react";

export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-label="favorite toggle"
    >
      {/* <Image src="/assets/heart.svg" alt="heart icon" width={24} height={24} /> */}
      <Heart color={"red"} fill={isFavorite ? "red" : "none"} />
    </button>
  );
}
