// display a list of comments
// Each comment’s text is displayed.
// Each comment’s date and time are displayed.
// The detail view includes a section labeled "Comments" displaying a list of comments for this art piece.

import styled from "styled-components";

export default function CommentsList({ comments, artPiece }) {
  const artPieceComments = comments.filter(
    (comment) => comment.slug === artPiece?.slug
  );

  return (
    <section>
      <StyledTitle>Comments</StyledTitle>
      <StyledList>
        {artPieceComments.map((comment) => (
          <StyledListItem key={comment.id}>
            <StyledText>{comment.comment}</StyledText>
            <StyledTime>{new Date(comment.date).toLocaleString()}</StyledTime>
          </StyledListItem>
        ))}
      </StyledList>
    </section>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  /* Nimmt mind. 250px ein und wächst gleichmäßig mit */
  flex: 1 1 250px;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  line-height: 1.3rem;
  color: var(--text-color-primary);
`;

const StyledText = styled.p`
  color: var(--text-color-secondary);
  font-size: 0.75rem;
`;
const StyledTime = styled.time`
  color: var(--text-color-secondary);
  font-size: 0.75rem;
`;
