// TASK 01
<!---CODE pages/index.js
import Image from "next/image";
import ArtPieceCard from "Components/ArtPieceCard/ArtPieceCard.jsx"

  ---- fill img infos ---
function getRandomArtPiece(artPieceCard) {
  const randomIndex = Math.floor(Math.random() * artPieceCard.length);
  return artPieceCard[randomIndex];
}

export default function HomePage() {
   const artPiece = getRandomArtPiece(artPieceCard);

  return (
    <main>
     <Image
        ---- fill img infos ---
      />
      <p>{artPiece.name}</p>
      <p>{`by ${artPiece.artist}`}</p>
    </main>
  );
}
-->

// TASK 02
<!---CODE pages/index.js
import Spotlight from "@/Components/Spotlight/Spotlight";

export default function HomePage() { 
  return <Spotlight />;
}
-->

<!---CODE components/Spotlight.js
import Image from "next/image";
import ArtPieceCard from "Components/ArtPieceCard/ArtPieceCard.jsx"

  ---- get random Img  ---
function getRandomArtPiece(artPieceCard) {
  const randomIndex = Math.floor(Math.random() * artPieceCard.length);
  return artPieceCard[randomIndex];
}

export default function HomePage() {
   const artPiece = getRandomArtPiece(artPieceCard);

  return (
    <main>
     <Image
        ---- fill img infos ---
      />
      <p>{artPiece.name}</p>
      <p>{`by ${artPiece.artist}`}</p>
    </main>
  );
}
-->

// TASK 03
<!---CODE pages/index.js
import Navigation from "../Components/Navigation/Navigation.jsx";
;

export default function HomePage ({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
-->
