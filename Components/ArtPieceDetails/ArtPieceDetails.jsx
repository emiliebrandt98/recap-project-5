import Link from "next/link";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";

export default function ArtPieceDetails({ artPiece }) {
  if (!artPiece) return <p>No details found</p>;

  return (
    <div>
      <Link href={"/gallery"}>Back to Art Gallery</Link>
      <ImageArtPiece artPiece={artPiece} />
      <p>{`"${artPiece.name}" by ${artPiece.artist}`}</p>
      <p>{`created ${artPiece.year}`}</p>
      <p>{`Genre: "${artPiece.genre}"`}</p>
    </div>
  );
}
