import Image from "next/image";

export default function FavoriteButton({ onToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-label="favorite toggle"
    >
      <Image src="/assets/heart.svg" alt="heart icon" width={24} height={24} />
    </button>
  );
}
