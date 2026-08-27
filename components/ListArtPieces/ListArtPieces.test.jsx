import { render, screen } from "@testing-library/react";
import ListArtPieces from "./ListArtPieces";

// test need artPieces, onToggleFavorite and artPiece
// test if all artPieces are shown

const artPiece = {
  slug: "wheat-field-with-cypresses",
  name: "Wheat Field with Cypresses",
  artist: "Vincent van Gogh",
  dimensions: {
    height: 1528,
    width: 1920,
    type: "jpg",
  },
};

function isFavorite() {
  return false;
}

test("renders the art pieces", () => {
  const onToggleFavorite = jest.fn();

  render(
    <ListArtPieces
      artPieces={[artPiece]}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );

  // Name
  const name = screen.getByText(/Wheat Field with Cypresses/i);
  expect(name).toBeInTheDocument();

  // Artist
  const artist = screen.getByText(/by Vincent van Gogh/i);
  expect(artist).toBeInTheDocument();
});

// test need isLoading
// test if artPiece are loading

function isLoading() {
  return <p>Loading…</p>;
}

test("artPiece are loading", () => {
  render(<ListArtPieces isLoading={isLoading} />);

  const loading = screen.getByText(/Loading…/i);
  expect(loading).toBeInTheDocument();
});

// test trow error
// test if artPiece aren't loading

function error() {
  return <p>Failed to load.</p>;
}

test("artPiece aren't loading", () => {
  render(<ListArtPieces error={error} />);

  const thorwError = screen.getByText(/Failed to load./i);
  expect(thorwError).toBeInTheDocument();
});
