import Image from "next/image";
import Link from "next/link";

export default function ArtPieceCard({ artPiece }) {
  return (
    <Link href="">
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={artPiece.dimensions.width}
        height={artPiece.dimensions.height}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{artPiece.name}</p>
      <p>{`by ${artPiece.artist}`}</p>
    </Link>
  );
}
