import { ArtPieceCard } from "@/data/ArtPieceCard";


// If your artworks are stored in an Component array such as ArtPieceCard, 
// you can select a random item like this: 
// Math.random() * (max - min) + min = 5.95
// Math.floor(5.95)= 5;
function getRandomArtPiece(ArtPiecesCard) {
  const randomIndex = Math.floor(Math.random() * ArtPiecesCard.length);
  return ArtPiecesCard[randomIndex];
}


export default function HomePage() {
   const artPiece = getRandomArtPiece(ArtPiecesCard);


  return (
    <main>
      <img
        src={artPiece.imageSource}
        alt={artPiece.title}
      />

      <p>{artPiece.name}</p>
      <p>{artPiece.year}</p>
      <p>{artPiece.genre}</p>
    </main>
  );
}
