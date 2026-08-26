import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
import userEvent from "@testing-library/user-event";

//├── displays randomly selected art piece
const artPieces = [
  {
    slug: "wheat-field-with-cypresses",
    name: "Wheat Field with Cypresses",
    artist: "Vincent van Gogh",
    imageSource: "/images/wheat-field.jpg",
    dimensions: {
      width: 500,
      height: 400,
    },
  },
];

test("displays a random art piece, artist name, image, and link", async () => {
  render(
    <Spotlight
      artPieces={artPieces}
      isLoading={false}
      isFavorite={() => false}
      onToggleFavorite={jest.fn()}
    />
  );

  expect(
    await screen.findByText("Wheat Field with Cypresses")
  ).toBeInTheDocument();

  expect(
    screen.getByText("by Vincent van Gogh")
  ).toBeInTheDocument();

  expect(
    screen.getByRole("img", {
      name: "Wheat Field with Cypresses",
    })
  ).toBeInTheDocument();
});


// ── calls loading

test("displays loading message while loading", () => {
  render(
    <Spotlight
      artPieces={[]}
      isLoading={true}
      isFavorite={() => false}
      onToggleFavorite={jest.fn()}
    />
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

// -- calls link
test("links to the detail page", async () => {
  render(
    <Spotlight
      artPieces={artPieces}
      isLoading={false}
      isFavorite={() => false}
      onToggleFavorite={jest.fn()}
    />
  );

  const link = await screen.findByRole("link", {
    name: "Wheat Field with Cypresses",
  });

  expect(link).toBeInTheDocument();

  expect(link).toHaveAttribute(
    "href",
    "/gallery/wheat-field-with-cypresses"
  );
});


// ── calls favorite handler

test("calls onToggleFavorite when favorite button is clicked", async () => {
  const onToggleFavorite = jest.fn();

  render(
    <Spotlight
      artPieces={artPieces}
      isLoading={false}
      isFavorite={() => false}
      onToggleFavorite={onToggleFavorite}
    />
  );

  const button = await screen.findByRole("button");

  await userEvent.click(button);

  expect(onToggleFavorite).toHaveBeenCalledWith(
    "wheat-field-with-cypresses"
  );
});