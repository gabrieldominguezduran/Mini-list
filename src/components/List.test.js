import React from "react";
import List from "./List";
import { render, fireEvent } from "@testing-library/react";

test("renders the correct content", () => {
  const { getByText, getByPlaceholderText } = render(<List />);

  getByText("Add");
  getByPlaceholderText("Write a list item...");
});

test("allow to add items to the list", () => {
  const { getByText, getByPlaceholderText } = render(<List />);

  const input = getByPlaceholderText("Write a list item...");
  fireEvent.change(input, { target: { value: "some text" } });
  fireEvent.click(getByText("Add"));

  getByText("some text");
});
