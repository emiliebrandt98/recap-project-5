import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import ImageArtPiece from "@/components/ImageArtPiece/ImageArtPiece";
import styled from "styled-components";

// All favorite art pieces are displayed in a list format.

// Each art piece's image is displayed.
// Each art piece's title is displayed.
// Each art piece's artist name is displayed.
// Each art piece has an active favorite button.

export default function FavoritesPage({
  isFavorite,
  favoriteArtPieces,
  onToggleFavorite,
}) {
  return (
    <main>
      <h1>Favorites</h1>

      <ul>
        {favoriteArtPieces?.map((artPiece) => (
          <StyledWrapper
            key={artPiece.slug}
            $isFavorite={isFavorite(artPiece.slug)}
          >
            <FavoriteButton
              isFavorite={isFavorite(artPiece.slug)}
              onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
            />
            <ImageArtPiece artPiece={artPiece} />
            <p>{artPiece.name}</p>
            <p>by {artPiece.artist}</p>
          </StyledWrapper>
        ))}
      </ul>
    </main>
  );
}

const StyledWrapper = styled.li`
  background-color: ${(props) =>
    props.$isFavorite ? "lightcoral" : "transparent"};
`;
