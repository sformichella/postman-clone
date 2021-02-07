import React from "react";
import { render, cleanup } from "@testing-library/react";
import Go from "./Go";

describe("Go component", () => {
  afterEach(() => cleanup());
  it("renders Go", () => {
    const { asFragment } = render(<Go />);
    expect(asFragment()).toMatchSnapshot();
  });
});
