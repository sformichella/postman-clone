// global.fetch = require("node-fetch");
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Request from "./Request";

describe("Request", () => {
  it("changes the search input", () => {
    render(<Request />);

    const searchInput = screen.getByLabelText("Search Articles");
    
    fireEvent.change(searchInput, {
      target: {
        value: "cute puppies"
      }
    });

    return waitFor(() => {
      const articles = screen.getByTestId("articles");
      expect(articles).not.toBeEmptyDOMElement();
      expect(searchInput).toHaveValue("cute puppies");
    });
  });
});
