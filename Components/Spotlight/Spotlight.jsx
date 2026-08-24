import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";

function getRandomArtPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function HomePage({ artPieces, onToggleFavorite, isFavorite }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }

  const randomArtPiece = getRandomArtPiece(artPieces);

  return (
    <main>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(randomArtPiece.slug)}
      />
      <ImageArtPiece artPiece={randomArtPiece} />
      <p>{randomArtPiece.name}</p>
      <p>{`by ${randomArtPiece.artist}`}</p>
    </main>
  );
}
