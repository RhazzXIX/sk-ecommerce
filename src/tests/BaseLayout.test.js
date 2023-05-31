import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BaseLayout from "../components/BaseLayout";

describe("BaseLayout component", () => {
  it("Renders on screen", () => {
    const { container } = render(<BaseLayout />);

    expect(container).toMatchSnapshot();
  });
  it("Renders it's children", () => {
    render(
      <BaseLayout>
        <main>
          <h1>Hi! I&apos;m the child!</h1>
        </main>
      </BaseLayout>
    );
    expect(
      screen.getByRole("heading", { name: "Hi! I'm the child!" })
    ).toBeInTheDocument();
  });
});
