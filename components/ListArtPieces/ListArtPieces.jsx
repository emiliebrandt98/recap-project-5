import styled from "styled-components";
import ArtPieceCard from "../ArtPieceCard/ArtPieceCard";

export default function ListArtPieces({
  artPieces,
  isLoading,
  error,
  onToggleFavorite,
  isFavorite,
}) {
  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Failed to load.</p>;

  return (
    <StyledList>
      {artPieces?.map((artPiece) => (
        <StyledListItem key={artPiece.slug}>
          <ArtPieceCard
            artPiece={artPiece}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </StyledListItem>
      ))}
    </StyledList>
  );
}

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
