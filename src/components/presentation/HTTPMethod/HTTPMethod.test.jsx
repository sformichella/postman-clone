import React from "react";
import { render, cleanup } from "@testing-library/react";
import HTTPMethod from "./HTTPMethod";

describe("HTTPMethod component", () => {
  afterEach(() => cleanup());
  it("renders HTTPMethod", () => {
    const { asFragment } = render(<HTTPMethod />);
    expect(asFragment()).toMatchSnapshot();
  });
});
