import ContactUS from "../Contactus";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<ContactUS />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("should load button inside a component", () => {
  render(<ContactUS />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("should load input Name  inside a component", () => {
  render(<ContactUS />);
  const inputName = screen.getByPlaceholderText("Name");
  expect(inputName).toBeInTheDocument();
});
test("should load 3 inputBoxes inside a component", () => {
  render(<ContactUS />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(3);
});
