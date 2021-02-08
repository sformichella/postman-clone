// global.fetch = require("node-fetch");
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Request from "./Request";

describe("Request", () => {
  it("changes the URL", () => {
    render(<Request />);

    const url = screen.getByLabelText("");
    
    fireEvent.change(url, {
      target: {
        value: "myapi.com/api/v1/request"
      }
    });

    return waitFor(() => {
      expect(url).toHaveValue("myapi.com/api/v1/request");
    });
  });
});
