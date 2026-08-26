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
    <StyledWrapper $isFavorite={isFavorite(artPiece.slug)}>
      <FavoriteButton
        isFavorite={isFavorite(artPiece.slug)}
        onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
      />
      <ImageArtPiece artPiece={artPiece} />
      <Link href={`/gallery/${artPiece.slug}`}>{artPiece.name}</Link>
      <p>{`by ${artPiece.artist}`}</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: ${(props) =>
    props.$isFavorite ? "var(--background-card)" : "transparent"};
`;
