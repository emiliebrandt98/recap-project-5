import { render, screen } from "@testing-library/react";
import ArtPieceCard from "./ArtPieceCard";
import userEvent from "@testing-library/user-event";

// test need isFavorite, onToggleFavorite and artPiece
// test if all artPiece Details are shown

const artPiece = {
  slug: "wheat-field-with-cypresses",
  name: "Wheat Field with Cypresses",
  artist: "Vincent van Gogh",
  imageSource:
    "https://example-apis.vercel.app/assets/art/wheat-field-with-cypresses.jpg",
  dimensions: {
    height: 1528,
    width: 1920,
    type: "jpg",
  },
};

function isFavorite() {
  return false;
}

test("renders the art piece card", async () => {
  const onToggleFavorite = jest.fn();
  const user = userEvent.setup();

  render(
    <ArtPieceCard
      artPiece={artPiece}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );

  // Link
  const link = screen.getByRole("link", {
    name: /wheat field with cypresses/i,
  });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/gallery/wheat-field-with-cypresses");

  // Artist
  const artist = screen.getByText(/by Vincent van Gogh/i);
  expect(artist).toBeInTheDocument();

  // Image
  const image = screen.getByAltText(/wheat field with cypresses/i);
  expect(image).toBeInTheDocument();

  // FavoriteButton
  const favoriteButton = screen.getByRole("button");
  await user.click(favoriteButton);
  expect(onToggleFavorite).toHaveBeenCalledWith("wheat-field-with-cypresses");
});
