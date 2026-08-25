
import useState  from "use-local-storage-state";
import { comments } from "../../data/comments";

// display a list of comments
// Each comment’s text is displayed.
// Each comment’s date and time are displayed.
// The detail view includes a section labeled "Comments" displaying a list of comments for this art piece.

export default function CommentsList (){
    const [artPieceComments, setArtPieceComments] = useState(
    comments.filter((comment) => comment.slug === artPiece.slug)

return (
    <section>
    <h2>Comments</h2>

    <ul>
        {artPieceComments.map((comment) => (
        <li key={comment.id}>
            <p>{comment.text}</p>
            <time>{new Date(comment.date).toLocaleString()}</time>
        </li>
        ))}
    </ul>
    </section>
);