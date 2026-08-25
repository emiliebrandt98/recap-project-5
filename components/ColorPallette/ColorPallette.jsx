export default function ColorPalette({ artPiece }) {
  return (
    <ul>
      {artPiece.colors.map((color) => (
        <li key={color} style={{ backgroundColor: color }}></li>
      ))}
    </ul>
  );
}
