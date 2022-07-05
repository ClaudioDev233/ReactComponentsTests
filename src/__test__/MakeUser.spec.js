import makeUser from "../utils/MakeUsers";

test("it should return a object with a name and an array of hobbies", () => {
  const name = "Claudio";
  const hobbies = ["Eat", "Sleep"];

  const output = {
    name: "Claudio",
    hobbies: ["Eat", "Sleep"],
  };

  expect(makeUser(name, hobbies)).toEqual(output);
});
