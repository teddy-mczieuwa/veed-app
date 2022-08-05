import { render, screen } from "@testing-library/react";
import RepoCardInfo from ".";

describe("RepoCardInfo Component", () => {
  test("RepoCardInfo shows a name", () => {
    const repo = {};
    render(<RepoCardInfo repo={repo} />);
    const name = screen.getByRole("img");
    expect(name).toBeInTheDocument();
  });
});
