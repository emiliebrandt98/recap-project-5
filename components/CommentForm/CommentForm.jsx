// The detail view includes an input field for writing a comment.
// The detail view includes a submit button labeled "Send".
// After submitting the form, the new comment is added to the list of comments.
import { useId, useState } from "react";
import styled from "styled-components";

export default function CommentForm({ onAddComment }) {
  // creates a unique HTML id for the input,
  const commentID = useId();

  const [commentText, setCommentText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // This will focus a form field with the attribute name="comment".
    const comment = event.target.elements.comment.value.trim();

    if (!comment) return;

    onAddComment(comment);
    setCommentText("");
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor={commentID}>Write a comment:</StyledLabel>
      <StyledTextArea
        id={commentID}
        name="comment"
        value={commentText}
        maxLength={150}
        required
        placeholder="Write here"
        onChange={(event) => setCommentText(event.target.value)}
      />

      <StyledCouter $Couter={150 - commentText.length <= 20}>
        {150 - commentText.length} charaters left
      </StyledCouter>
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const StyledLabel = styled.label`
  margin: 0;
  font-size: 1rem;
  line-height: 1rem;
  color: var(--text-color-primary);
  font-weight: bold;
`;

const StyledTextArea = styled.textarea`
  min-height: 2.5rem;
  resize: vertical;
  border: solid 2px var(--border-tertiary);
  background-color: transparent;
  padding: 0.5rem;
  color: var(--text-color-secondary);
  box-sizing: border-box;
  font-family: system-ui;

  &::placeholder {
    color: var(--text-color-secondary);
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: var(--border-primary);
  }
`;

const StyledCouter = styled.span`
  font-size: 0.75rem;
  text-align: right;
  color: ${(props) =>
    props.$isLimitNear ? "#ef4444" : "var(--text-color-secondary)"};
`;

const StyledButton = styled.button`
  background-color: var(--background-color-primary);
  border: solid 2px var(--border-primary);
  padding: 8px;
  color: var(--text-color-secondary);
  cursor: pointer;

  &:hover {
    background-color: var(--background-color-secondary);
    text-decoration: underline;
    color: var(--text-color-hover);
  }
`;
