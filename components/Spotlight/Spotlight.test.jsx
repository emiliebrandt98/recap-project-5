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

test("displays a randomly selected art piece", async () => {
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