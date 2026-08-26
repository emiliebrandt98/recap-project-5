import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece.jsx";
import Link from "next/link";

export default function ArtPieceCard({
  artPiece,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <StyledCardWrapper $isFavorite={isFavorite(artPiece.slug)}>
      <StyledImageWrapper>
        <StyledFavoriteButtonWrapper>
          <FavoriteButton
            isFavorite={isFavorite(artPiece.slug)}
            onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
          />
        </StyledFavoriteButtonWrapper>

        <ImageArtPiece artPiece={artPiece} />
      </StyledImageWrapper>

      <StyledTextWrapper>
        <StyledLink href={`/gallery/${artPiece.slug}`}>
          <StyledTitle>{artPiece.name}</StyledTitle>
        </StyledLink>
        <StyledText>{`by ${artPiece.artist}`}</StyledText>
      </StyledTextWrapper>
    </StyledCardWrapper>
  );
}

const StyledCardWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-radius: 16px;
  overflow: hidden;
  border: solid 2px var(--background-card);
  background-color: ${(props) =>
    props.$isFavorite ? "var(--background-card)" : "transparent"};
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledFavoriteButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color-primary);
  padding: 0;

  &:hover {
    color: var(--text-color-hover);
  }
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
`;

const StyledText = styled.p`
  color: var(--text-color-secondary);
  font-size: 0.75rem;
`;
