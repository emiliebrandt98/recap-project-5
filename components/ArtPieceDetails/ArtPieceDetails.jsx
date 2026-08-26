import Link from "next/link";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ColorPallette from "../ColorPallette/ColorPallette";

// NEW Components
// import { initialComments } from "../../data/comments";
// import useLocalStorageState from "use-local-storage-state";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm.jsx";
import { useState } from "react";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  onToggleFavorite,

}) {

  const initialComments = []

  // const [comments, setArtPieceComments] = useLocalStorageState("comments", { defaultValue: initialComments});
const [comments, setComments] = useState(initialComments);

// specific ARRAY artPieceComments for SLUG ArtPieceDetail
// initialComments are filtered to create useState arary with SLUG
  const artPieceComments = comments.filter(
    (comment) => comment.slug === artPiece?.slug
);

// handle submit 
  function handleAddComment(commentText) {
  const newComment = {
    id: crypto.randomUUID(),
    slug: artPiece.slug,
    comment: commentText,
    date: new Date().toISOString(),
  };

  setComments((currentComments) => [
    ...currentComments,
    newComment,
  ]);
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
     {/* new Component COMMENTS */ }
      <section>
        <CommentsList artPieceComments={artPieceComments}/>
        {/* new Component FORM */ }
       <CommentForm onAddComment={handleAddComment} />
      </section>
    </div>
  );
}
