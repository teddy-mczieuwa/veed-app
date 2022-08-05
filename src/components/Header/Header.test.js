import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header Component", () => {
  test("Header shows a title", () => {
    render(<Header />);
    const headerText = screen.getByRole("heading");
    expect(headerText).toHaveTextContent("Starred Repositories");
  });

  test("Render a button with the initial text", () => {
    render(<Header />);
    const headerButton = screen.getByRole("button");
    expect(headerButton).toHaveTextContent("Show Favorites");
  });
});
