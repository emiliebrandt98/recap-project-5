import ArtPieceCard from "@/components/ArtPieceCard/ArtPieceCard";
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
    <StyledMain>
      <StyledH1>Favorites</StyledH1>

      <StyledList>
        {favoriteArtPieces?.map((artPiece) => (
          <StyledListItem key={artPiece.slug}>
            <ArtPieceCard
              artPiece={artPiece}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isFavorite}
            />
          </StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding-bottom: 4em;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: var(--text-color-primary);
  line-height: 2.25rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  /* Nimmt mind. 250px ein und wächst gleichmäßig mit */
  flex: 1 1 250px;
  max-width: 500px;
`;
