import Link from "next/link";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ColorPallette from "../ColorPallette/ColorPallette";

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
        isFavorite={isFavorite(artPiece.slug)}
        onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
      />
      <ImageArtPiece artPiece={artPiece} />
      <ColorPallette artPiece={artPiece} />
      <p>{`"${artPiece.name}" by ${artPiece.artist}`}</p>
      <p>{`created ${artPiece.year}`}</p>
      <p>{`Genre: "${artPiece.genre}"`}</p>
    </div>
  );
}
