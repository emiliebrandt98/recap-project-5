import Link from "next/link";
import ImageArtPiece from "../Image/Image";

export default function ArtPieceDetails({ artPiece }) {
  if (!artPiece) return <p>No details found</p>;

  return (
    <div>
      <Link href={"/Gallery"}>Back to Art Gallery</Link>
      <ImageArtPiece artPiece={artPiece} />
      <p>{`"${artPiece.name}" by ${artPiece.artist}`}</p>
      <p>{`created ${artPiece.year}`}</p>
      <p>{`Genre: "${artPiece.genre}"`}</p>
    </div>
  );
}
