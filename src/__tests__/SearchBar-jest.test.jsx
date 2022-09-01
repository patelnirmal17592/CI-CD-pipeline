import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";

describe("Punctuation Tests", () => {
  const testcases = [
    { input: "hello%world" },
    { input: "!hello world" },
    { input: ";hello?world!" },
    { input: "hello;world" },
    { input: "hello world?" },
  ];

  testcases.map((tc) => {
    return it(`when string is ${tc.input} return hello world`, () => {
      render(<SearchBar />);
      const expected = "hello world";
      const input = screen.getByLabelText(
        "Ask me anything about breakdown insurance..."
      );
      fireEvent.input(input, { target: { value: `${tc.input}` } });

      expect(input.value).toBe(expected);
    });
  });
});
