import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation component", () => {
  afterEach(() => cleanup());
  it("renders Navigation", () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
