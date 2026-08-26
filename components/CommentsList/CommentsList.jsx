
// display a list of comments
// Each comment’s text is displayed.
// Each comment’s date and time are displayed.
// The detail view includes a section labeled "Comments" displaying a list of comments for this art piece.

export default function CommentsList ({ artPieceComments }){
return (
    <section>
    <h2>Comments</h2>

    <ul>
        {artPieceComments.map((comment) => (
        <li key={comment.id}>
            <p>{comment.comment}</p>
            <time>{new Date(comment.date).toLocaleString()}</time>
        </li>
        ))}
    </ul>
    </section>
);}