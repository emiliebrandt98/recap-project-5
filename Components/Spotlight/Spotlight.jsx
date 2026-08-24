import Image from "next/image";

function getRandomArtPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

// artPieces als Prop von _app
export default function HomePage({ artPieces }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }

  const artPiece = getRandomArtPiece(artPieces);

  return (
    <main>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={artPiece.dimensions.width}
        height={artPiece.dimensions.height}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{artPiece.name}</p>
      <p>{`by ${artPiece.artist}`}</p>
    </main>
  );
}
