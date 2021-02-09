import React from "react";
import { render, cleanup } from "@testing-library/react";
import Url from "./Url";

describe("Url component", () => {
  afterEach(() => cleanup());
  it("renders Url", () => {
    const { asFragment } = render(<Url />);
    expect(asFragment()).toMatchSnapshot();
  });
});
