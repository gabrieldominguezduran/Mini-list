import React from "react";
import Note from "./Note";
import { render } from "@testing-library/react";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<Note />);
});
