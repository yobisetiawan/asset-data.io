import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "./index";

test("renders logo", () => {
  render(<Page />);
  const logo = screen.getByText(/AssetData.io/i);
  expect(logo).toBeInTheDocument();
});

test("renders btn sign in", () => {
  render(<Page />);
  const signInBtn = screen.getByText(/SIGN IN/i);
  expect(signInBtn).toBeInTheDocument();
});
