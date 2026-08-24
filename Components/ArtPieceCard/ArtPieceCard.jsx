import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import Link from "next/link";

export default function ArtPieceCard({ artPiece }) {
  return (
    <div>
      <ImageArtPiece artPiece={artPiece} />
      <Link href={`/gallery/${artPiece.slug}`}>{artPiece.name}</Link>
      <p>{`by ${artPiece.artist}`}</p>
    </div>
  );
}
