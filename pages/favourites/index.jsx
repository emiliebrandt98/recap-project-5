import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Image from "next/image";

// All favorite art pieces are displayed in a list format.

// Each art piece's image is displayed.
// Each art piece's title is displayed.
// Each art piece's artist name is displayed.
// Each art piece has an active favorite button.

export default function FavoritesPage({favoriteArtPieces, onToggleFavorite}) {
  return (
    <main>
      <h1>Favorites</h1>

      <ul>

        {favoriteArtPieces?.map((artPiece) => (
          <li key={artPiece.slug}>
            <Image
              src={artPiece.imageSource}
              alt={artPiece.name}
              width={artPiece.dimensions.width}
              height={artPiece.dimensions.height}
            />

            <p>{artPiece.name}</p>
            <p>by {artPiece.artist}</p>

            <FavoriteButton
              artPiece={artPiece}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
