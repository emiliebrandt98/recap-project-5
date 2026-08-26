import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";



// variable Object artPiece infos
const artPiece = {
  name: "Wheat Field with Cypresses",
  artist: "Vincent van Gogh",
  imageSource: "/images/wheat-field.jpg",
  dimensions: {
    width: 500,
    height: 400,
  },
};


// test RANDOM ART PIECE
test("displays a randomly selected art piece", () => {
  render(<Spotlight artPieces={artPieces} />);

  expect(
    screen.getByText("Vincent van Gogh")
  ).toBeInTheDocument();

  expect(
    screen.getByRole("img", {
      name: "Wheat Field with Cypresses",
    })
  ).toBeInTheDocument();
});


// test ARTIST NAME
// test("displays the artist of the selected art piece", () => {

// // render Component Spotlight
//   render(<Spotlight artPiece={artPiece} />);

//   expect(
//     screen.getByText("Vincent van Gogh")
//   ).toBeInTheDocument();
// });

// // test ARTIST NAME
// test("displays the image of the selected art piece", () => {
//   render(<Spotlight artPiece={artPiece} />);

//   const image = screen.getByRole("img");

//   expect(image).toHaveAttribute(
//     "alt",
//     "Wheat Field with Cypresses"
//   );
// });
