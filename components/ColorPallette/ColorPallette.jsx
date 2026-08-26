import styled from "styled-components";

export default function ColorPalette({ artPiece }) {
  return (
    <StyledList>
      {artPiece.colors.map((color) => (
        <StyledColor
          key={color}
          style={{ backgroundColor: color }}
        ></StyledColor>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledColor = styled.li`
  height: 40px;
  width: 40px;
`;
