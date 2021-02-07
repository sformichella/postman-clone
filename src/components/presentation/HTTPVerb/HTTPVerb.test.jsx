import React from "react";
import { render, cleanup } from "@testing-library/react";
import HTTPVerb from "./HTTPVerb";

describe("HTTPVerb component", () => {
  afterEach(() => cleanup());
  it("renders HTTPVerb", () => {
    const { asFragment } = render(<HTTPVerb />);
    expect(asFragment()).toMatchSnapshot();
  });
});
