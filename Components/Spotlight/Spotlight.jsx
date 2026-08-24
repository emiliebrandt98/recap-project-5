import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";

function getRandomArtPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function HomePage({ artPieces }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }

  const artPiece = getRandomArtPiece(artPieces);

  return (
    <main>
      <ImageArtPiece artPiece={artPiece} />
      <p>{artPiece.name}</p>
      <p>{`by ${artPiece.artist}`}</p>
    </main>
  );
}
