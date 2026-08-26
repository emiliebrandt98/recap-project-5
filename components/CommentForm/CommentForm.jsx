// The detail view includes an input field for writing a comment.
// The detail view includes a submit button labeled "Send".
// After submitting the form, the new comment is added to the list of comments.
import { useId } from "react";
import styled from "styled-components";

export default function CommentForm({ onAddComment }) {
  // creates a unique HTML id for the input,
  const commentID = useId();

  function handleSubmit(event) {
    event.preventDefault();

    // This will focus a form field with the attribute name="comment".
    const comment = event.target.elements.comment.value.trim();

    if (!comment) return;

    onAddComment(comment);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor={commentID}>Write a comment:</StyledLabel>
      <StyledInput
        id={commentID}
        name="comment"
        type="text"
        required
        placeholder="Write here"
      />

      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLabel = styled.label`
  color: var(--text-color-secondary);
  font-size: 1rem;
`;

const StyledInput = styled.input`
  height: 2.5rem;
  border: solid 2px var(--border-tertiary);
  background-color: transparent;
  padding: 1rem;

  &::placeholder {
    color: var(--text-color-secondary);
    opacity: 1;
  }
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
