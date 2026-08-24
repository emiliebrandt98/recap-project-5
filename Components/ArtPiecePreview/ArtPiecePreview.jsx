export default function ArtPiecePreview({ piece }) {
  return (
    <li>
      <img src={piece.imageSource} alt={piece.name} />
      <p>{piece.name}</p>
      <p>{piece.artist}</p>
    </li>
  );
}
