import Image from "next/image";
import Link from "next/link";

export default function ArtPieceCard({ piece }) {
  return (
    <Link href="">
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={piece.dimensions.width}
        height={piece.dimensions.height}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{piece.name}</p>
      <p>{piece.artist}</p>
    </Link>
  );
}
