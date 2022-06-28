import { Multiply } from "../utils/Operations/Multiply";

describe("Multiply function", () => {
  it("it should multiply two numbers", () => {
    const num1 = 1;
    const num2 = 2;

    const output = 2;

    expect(Multiply(num1, num2)).toEqual(output);
  });
  it("should throw an error if a parameter is not a number", () => {
    const num1 = "a";
    const num2 = 2;

    expect(() => Multiply(num1, num2)).toThrowError(
      "One of the parameters is not a number"
    );
  });
});
