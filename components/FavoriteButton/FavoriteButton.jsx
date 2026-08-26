import { Heart } from "lucide-react";
import styled from "styled-components";

export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <StyledButton
      type="button"
      onClick={onToggleFavorite}
      aria-label="favorite toggle"
    >
      <Heart
        color="var(--icon-border)"
        fill={isFavorite ? "var(--icon-border)" : "none"}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-color-primary);
  border: solid 2px var(--border-primary);
  padding: 8px;

  &:hover {
    background-color: var(--background-color-secondary);
  }
`;
