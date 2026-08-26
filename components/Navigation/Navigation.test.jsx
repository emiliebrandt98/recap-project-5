import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders navigation links", () => {
  render(<Navigation />);

  expect(screen.getByRole("link", { name: "Spotlight" })).toHaveAttribute(
    "href",
    "/"
  );

  expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute(
    "href",
    "/gallery"
  );

  expect(screen.getByRole("link", { name: "Favourites" })).toHaveAttribute(
    "href",
    "/favourites"
  );
});