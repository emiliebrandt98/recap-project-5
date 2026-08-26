import { useState, useEffect } from "react";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";

function getRandomArtPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function HomePage({
  artPieces,
  isLoading,
  onToggleFavorite,
  isFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  // Once artPieces changes from empty/undefined to loaded data,
  // select a random art piece.
  useEffect(() => {
    if (artPieces && artPieces.length > 0) {
      setRandomArtPiece(getRandomArtPiece(artPieces));
    }
  }, [artPieces]);

  if (isLoading || !randomArtPiece) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <FavoriteButton
        isFavorite={isFavorite(randomArtPiece.slug)}
        onToggleFavorite={() => onToggleFavorite(randomArtPiece.slug)}
      />
      <ImageArtPiece artPiece={randomArtPiece} />
      <Link href={`/gallery/${randomArtPiece.slug}`}>
        {randomArtPiece.name}
      </Link>
      <p>{`by ${randomArtPiece.artist}`}</p>
    </main>
  );
}
