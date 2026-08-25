import Link from "next/link";
import ImageArtPiece from "../ImageArtPiece/ImageArtPiece";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

// NEW Components
import { initialComments } from "../../data/comments";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm.jsx";
import { useState } from "react";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  onToggleFavorite,

}) {

  const [comments, setArtPieceComments] = useState(initialComments);
// const [artPieceComments, setArtPieceComments] = useState(initialComments);

// specific ARRAY artPieceComments for SLUG ArtPieceDetail
// initialComments are filtered to create useState arary with SLUG
  const artPieceComments = initialComments.filter(
    (comment) => comment.slug === artPiece?.slug
);
  // const filterComments = artPieceComments.filter((comment) => comment.slug === artPiece?.slug )
  // console.log(artPieceComments);

// handle submit 
  function handleAddComment(commentText) {
  const newComment = {
    id: crypto.randomUUID(),
    slug: artPiece.slug,
    comment: commentText,
    date: new Date().toISOString(),
  };

  setArtPieceComments((currentComments) => [
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
      <p>{`"${artPiece.name}" by ${artPiece.artist}`}</p>
      <p>{`created ${artPiece.year}`}</p>
      <p>{`Genre: "${artPiece.genre}"`}</p>
     {/* new Component COMMENTS */ }
      <section>
        <h2>Comments</h2>
        <CommentsList artPieceComments={artPieceComments}/>
        {/* new Component FORM */ }
       <CommentForm onAddComment={handleAddComment} />
      </section>
    </div>
  );
}
