import { render, screen } from "@testing-library/react";
import { RepoCard } from "./style";

describe("RepoCard Component", () => {
  test("RepoCard exists", () => {
    render(<RepoCard />);
    const item = screen.getByRole("listitem");
    expect(item).toBeInTheDocument();
  });
});
