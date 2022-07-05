import reverse from "../utils/Reverse";

test("it should reverse a string", () => {
  const output = "oiraM";
  expect(reverse("Mario")).toEqual(output);
});
