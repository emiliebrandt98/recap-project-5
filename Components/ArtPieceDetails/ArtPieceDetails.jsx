import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ artPiece }) {
  if (!artPiece) return <p>No Ddetails found</p>;

  return (
    <div>
      <Link href={"/Gallery"}>Back to Art Gallery</Link>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={artPiece.dimensions.width}
        height={artPiece.dimensions.height}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{`"${artPiece.name}" by ${artPiece.artist}`}</p>
      <p>{`created ${artPiece.year}`}</p>
      <p>{`Genre: "${artPiece.genre}"`}</p>
    </div>
  );
}
