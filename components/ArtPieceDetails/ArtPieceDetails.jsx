import Link from "next/link";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ColorPallette from "../ColorPallette/ColorPallette";

// NEW Components
// import { initialComments } from "../../data/comments";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

const initialComments = [];

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  onToggleFavorite,
}) {
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: initialComments,
  });

  // handle submit
  function handleAddComment(commentText) {
    const newComment = {
      id: crypto.randomUUID(),
      slug: artPiece.slug,
      comment: commentText,
      date: new Date().toISOString(),
    };

    setComments((currentComments) => [...currentComments, newComment]);
  }

  if (!artPiece) return <p>No details found</p>;

  return (
    <StyledMain>
      <StyledLink href={"/gallery"}>← Back to Art Gallery</StyledLink>

      <StyledImageWrapper>
        <StyledFavoriteButtonWrapper>
          <FavoriteButton
            isFavorite={isFavorite(artPiece.slug)}
            onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
          />
        </StyledFavoriteButtonWrapper>
        <ImageArtPiece artPiece={artPiece} />
        <ColorPallette artPiece={artPiece} />
      </StyledImageWrapper>

      <StyledTextWrapper>
        <StyledTitle>{`${artPiece.name}`}</StyledTitle>
        <StyledText>{`by ${artPiece.artist}`}</StyledText>
        <StyledInfo>
          <StyledSpan>{`Year: ${artPiece.year}`}</StyledSpan>
          <StyledSpan>{`Genre: ${artPiece.genre}`}</StyledSpan>
        </StyledInfo>
      </StyledTextWrapper>

      <CommentsList comments={comments} artPiece={artPiece} />
      <CommentForm onAddComment={handleAddComment} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color-secondary);

  &:hover {
    color: var(--text-color-hover);
    text-decoration: underline;
  }
`;

const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  gap: 1.25rem;
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

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3rem;
  color: var(--text-color-primary);
`;

const StyledText = styled.p`
  color: var(--text-color-secondary);
  font-size: 0.75rem;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 16px 1rem;
  color: var(--text-color-secondary);
  border: solid 2px var(--background-card);
  border-radius: 8px;
`;

const StyledSpan = styled.span`
  font-size: 0.75rem;
  flex-grow: 1;
  text-align: center;
`;
