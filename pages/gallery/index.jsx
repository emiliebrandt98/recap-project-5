import ListArtPieces from "@/components/ListArtPieces/ListArtPieces";
import styled from "styled-components";

export default function Gallery({
  artPieces,
  isLoading,
  error,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <StyledH1>Art Gallery</StyledH1>
      <ListArtPieces
        artPieces={artPieces}
        isLoading={isLoading}
        error={error}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: var(--text-color-primary);
  line-height: 2.25rem;
`;
