import ArtPieceDetails from "./ArtPieceDetails";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("use-local-storage-state", () => ({
  __esModule: true,
  default: (key, options) => [options?.defaultValue || [], jest.fn()],
}));

// test need isFavorite, onToggleFavorite and artPiece
// test if all artPiece Details are shown

const artPiece = {
  slug: "wheat-field-with-cypresses",
  artist: "Vincent van Gogh",
  name: "Wheat Field with Cypresses",
  imageSource:
    "https://example-apis.vercel.app/assets/art/wheat-field-with-cypresses.jpg",
  year: "1889",
  genre: "Landscape Painting",
  colors: ["#37412E", "#8D7332", "#838665", "#718F98", "#9DA59E"],
  dimensions: {
    height: 1528,
    width: 1920,
    type: "jpg",
  },
};

function isFavorite() {
  return false;
}

test("renders the art piece details", async () => {
  const onToggleFavorite = jest.fn();
  const user = userEvent.setup();

  render(
    <ArtPieceDetails
      artPiece={artPiece}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );

  // Link
  const link = screen.getByRole("link", {
    name: /gallery/i,
  });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/gallery");

  // FavoriteButton
  const favoriteButton = screen.getByRole("button", {
    name: /favorite toggle/i,
  });
  await user.click(favoriteButton);
  expect(onToggleFavorite).toHaveBeenCalledWith("wheat-field-with-cypresses");

  // Image
  const image = screen.getByAltText(/wheat field with cypresses/i);
  expect(image).toBeInTheDocument();

  // Name and Artist
  const nameAndArtist = screen.getByText(
    /"wheat field with cypresses" by vincent van gogh/i
  );
  expect(nameAndArtist).toBeInTheDocument();

  // Year
  const year = screen.getByText(/created 1889/i);
  expect(year).toBeInTheDocument();

  // Genre
  const genre = screen.getByText(/Genre: "Landscape Painting"/i);
  expect(genre).toBeInTheDocument();
});
