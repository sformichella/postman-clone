// global.fetch = require("node-fetch");
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Request from "./Request";

describe("Request", () => {
  it("changes the URL", () => {
    render(<Request />);

    const url = screen.getByLabelText("Request URL:");
    
    fireEvent.change(url, {
      target: {
        value: "myapi.com/api/v1/request"
      }
    });

    return waitFor(() => {
      expect(url).toHaveValue("myapi.com/api/v1/request");
    });
  });

  it("changes the HTTP method", () => {
    render(<Request />);

    const method = screen.getByLabelText("GET");
    
    fireEvent.change(method, {
      target: {
        value: "POST"
      }
    });

    return waitFor(() => {
      expect(method.value).toBe("POST");
    });
  });
});
