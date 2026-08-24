import Link from "next/link";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  onToggleFavorite,
}) {
  if (!artPiece) return <p>No details found</p>;

  return (
    <div>
      <Link href={"/gallery"}>Back to Art Gallery</Link>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
      />
      <ImageArtPiece artPiece={artPiece} />
      <p>{`"${artPiece.name}" by ${artPiece.artist}`}</p>
      <p>{`created ${artPiece.year}`}</p>
      <p>{`Genre: "${artPiece.genre}"`}</p>
    </div>
  );
}
