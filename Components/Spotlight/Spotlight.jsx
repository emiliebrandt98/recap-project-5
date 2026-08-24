import Image from "next/image";

function getRandomArtPiece(artPieceCard) {
  const randomIndex = Math.floor(Math.random() * artPieceCard.length);
  return artPieceCard[randomIndex];
}

export default function HomePage() {
   const artPiece = getRandomArtPiece(artPieceCard);


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