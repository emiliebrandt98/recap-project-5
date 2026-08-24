import Image from "next/image";

export default function ImageArtPiece({ artPiece }) {
  return (
    <Image
      src={artPiece.imageSource}
      alt={artPiece.name}
      width={artPiece.dimensions.width}
      height={artPiece.dimensions.height}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
