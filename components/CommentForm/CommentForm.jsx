// The detail view includes an input field for writing a comment.
// The detail view includes a submit button labeled "Send".
// After submitting the form, the new comment is added to the list of comments.
import { useId } from "react";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor={commentID}>Write a comment</label>
      <input id={commentID} name="comment" type="text" required />

      <button type="submit">Send</button>
    </form>
  );
}
