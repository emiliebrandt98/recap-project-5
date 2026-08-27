import { useState, useEffect } from "react";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import styled from "styled-components";

function getRandomArtPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function HomePage({
  artPieces,
  isLoading,
  onToggleFavorite,
  isFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  // Once artPieces changes from empty/undefined to loaded data,
  // select a random art piece.
  useEffect(() => {
    if (artPieces && artPieces.length > 0) {
      setRandomArtPiece(getRandomArtPiece(artPieces));
    }
  }, [artPieces]);

  if (isLoading || !randomArtPiece) {
    return <p>Loading...</p>;
  }

  return (
    <StyledCardWrapper $isFavorite={isFavorite(randomArtPiece.slug)}>
      <StyledImageWrapper>
        <StyledFavoriteButtonWrapper>
          <FavoriteButton
            isFavorite={isFavorite(randomArtPiece.slug)}
            onToggleFavorite={() => onToggleFavorite(randomArtPiece.slug)}
          />
        </StyledFavoriteButtonWrapper>
        <ImageArtPiece artPiece={randomArtPiece} />
      </StyledImageWrapper>

      <StyledTextWrapper>
        <StyledLink href={`/gallery/${randomArtPiece.slug}`}>
          <StyledTitle>{randomArtPiece.name}</StyledTitle>
        </StyledLink>
        <StyledText>{`by ${randomArtPiece.artist}`}</StyledText>
      </StyledTextWrapper>
    </StyledCardWrapper>
  );
}

const StyledCardWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 16px;
  overflow: hidden;
  border: solid 2px var(--background-card);
  background-color: ${(props) =>
    props.$isFavorite ? "var(--background-card)" : "transparent"};

  @media (max-width: 640px) {
    height: 80vh;
    max-width: 450px;
    margin: 0 auto;
    padding: 2rem;
    gap: 1.25rem;
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 640px) {
    & > img {
    object-fit: cover;
    height: 60vh;
    }}
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
  line-height: 1.3rem;
`;

const StyledText = styled.p`
  color: var(--text-color-secondary);
  font-size: 0.75rem;
`;
