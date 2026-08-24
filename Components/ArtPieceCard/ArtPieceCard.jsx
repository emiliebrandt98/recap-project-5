import ImageArtPiece from "../Image/Image";
import Link from "next/link";

export default function ArtPieceCard({ artPiece }) {
  return (
    <div>
      <ImageArtPiece artPiece={artPiece} />
      <Link href={`/Gallery/${artPiece.slug}`}>{artPiece.name}</Link>
      <p>{`by ${artPiece.artist}`}</p>
    </div>
  );
}
