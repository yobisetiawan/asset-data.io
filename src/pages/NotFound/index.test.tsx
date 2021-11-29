import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "./index";

test("renders 404 page", () => {
  render(<Page />);
  const text = screen.getByText(/Sorry, the page you visited does not exist/i);
  expect(text).toBeInTheDocument();
});
