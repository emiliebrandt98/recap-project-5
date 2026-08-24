import Image from "next/image";

function getRandomArtPiece(ArtPiecesCard) {
  const randomIndex = Math.floor(Math.random() * ArtPiecesCard.length);
  return ArtPiecesCard[randomIndex];
}

export default function HomePage() {
   const artPiece = getRandomArtPiece(ArtPiecesCard);


  return (
    <main>
     <Image
        src={ArtPiece.imageSource}
        alt={ArtPiece.name}
        width={ArtPiece.dimensions.width}
        height={ArtPiece.dimensions.height}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{ArtPiece.name}</p>
      <p>{`by ${ArtPiece.artist}`}</p>
    </main>
  );
}