import Image from "next/image";

export default function ImageArtPiece({ artPiece, isFavorite, onToggleFavorite }) {
  return (
    <Image
      src={artPiece.imageSource}
      alt={artPiece.name}
      width={artPiece.dimensions.width}
      height={artPiece.dimensions.height}
      style={{ width: "100%", height: "auto" }}
    />
     <button onClick={() => onToggleFavorite(artPiece)}>
        {isFavorite ? "♥" : "♡"}
      </button>
  );
}
