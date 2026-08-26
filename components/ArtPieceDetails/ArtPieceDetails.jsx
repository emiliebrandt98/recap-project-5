import Link from "next/link";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ColorPallette from "../ColorPallette/ColorPallette";

// NEW Components
// import { initialComments } from "../../data/comments";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import useLocalStorageState from "use-local-storage-state";

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
    <div>
      <Link href={"/gallery"}>Back to Art Gallery</Link>
      <FavoriteButton
        isFavorite={isFavorite(artPiece.slug)}
        onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
      />
      <ImageArtPiece artPiece={artPiece} />
      <ColorPallette artPiece={artPiece} />
      <p>{`"${artPiece.name}" by ${artPiece.artist}`}</p>
      <p>{`created ${artPiece.year}`}</p>
      <p>{`Genre: "${artPiece.genre}"`}</p>

      <section>
        <CommentsList comments={comments} artPiece={artPiece} />
        <CommentForm onAddComment={handleAddComment} />
      </section>
    </div>
  );
}
