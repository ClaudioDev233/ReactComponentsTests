import { Lookup } from "../utils/Lookup";
describe("Lookup function", () => {
  it("should return an user likes list", () => {
    const output = ["Java", "React", "C"];
    expect(Lookup("danilo", "likes")).toEqual(output);
  });

  it("should throw an error if the login is not found", () => {
    expect(() => Lookup("blabert", "likes")).toThrowError(/user not found/i);
  });

  it("should throw an error if property is invalid", () => {
    expect(() => Lookup("danilo", "noProp")).toThrowError(
      /property not found/i
    );
  });
});
