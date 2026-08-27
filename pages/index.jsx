import Spotlight from "@/components/Spotlight/Spotlight";
import styled from "styled-components";

export default function HomePage({
  artPieces,
  onToggleFavorite,
  isFavorite,
  isLoading,
}) {
  return (
    <StyledMain>
      <Spotlight
        artPieces={artPieces}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        isLoading={isLoading}
      />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding-bottom: 4em;
`;
