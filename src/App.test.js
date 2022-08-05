import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import App from "./App";

describe("Header", () => {
  test("Header button shows *Show all* when clicked once and *Show Favorites when clicked twice", async () => {
    await act(async () => render(<App />));
    const headerButton = screen.getByRole("button", { name: "Show Favorites" });
    fireEvent.click(headerButton);
    expect(headerButton).toHaveTextContent("Show All");
    fireEvent.click(headerButton);
    expect(headerButton).toHaveTextContent("Show Favorites");
  });
});

describe("Search", () => {
  test("Search input displays on intialization", async () => {
    await act(async () => render(<App />));
    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();
  });

  test("Search inputs does not display when viewing favorites", async () => {
    await act(async () => render(<App />));
    const searchInput = screen.queryByRole("searchbox");
    const headerButton = screen.getByRole("button", {
      name: "Show Favorites",
    });
    fireEvent.click(headerButton);
    expect(searchInput).not.toBeInTheDocument();
  });

  test("filter by language", async () => {
    await act(async () => render(<App />));
    const searchInput = screen.queryByRole("searchbox");
    const result = screen.queryByText("projects");
    fireEvent.change(searchInput, { target: { value: "javascript" } });
    expect(result).toBeTruthy;
  });

  test("Repositories get loaded on initialization", async () => {
    await waitFor(() => {
      screen.findByText("name");
    });
  });
});
