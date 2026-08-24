import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";

function getRandomArtPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function HomePage({ 
  artPieces,
  favoriteArtPieces,
  onToggleFavorite, }) 
  
  {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }

  const randomArtPiece = getRandomArtPiece(artPieces);

  return (
    <main>
      <ImageArtPiece 
       artPiece={randomArtPiece} 
       isFavorite={isFavorite}
       onToggleFavorite={onToggleFavorite}/>
      <p>{randomArtPiece.name}</p>
      <p>{`by ${randomArtPiece.artist}`}</p>
    </main>
  );
}
