
// The detail view includes an input field for writing a comment.
// The detail view includes a submit button labeled "Send".
// After submitting the form, the new comment is added to the list of comments.


export default function CommentForm({ onAddComment }) {

  function handleSubmit(event) {
    event.preventDefault();

    // This will focus a form field with the attribute name="comment".
    const comment = event.target.elements.comment.value.trim();

    // if NOT
    if (!comment) return;

    onAddComment(comment);

    // reset
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Write a comment</label>

      <input
        id="comment"
        name="comment"
        type="text"
      />

      <button type="submit">Send</button>
    </form>
  );
}