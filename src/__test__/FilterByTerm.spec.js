import { filterByTerm } from "../utils/FilterByTerm";

test("it should filter by a search term", () => {
  //entrada
  const inputArr = [
    { id: 1, name: "Maçã" },
    { id: 2, name: "Laranja" },
    { id: 3, name: "Melao" },
    { id: 4, name: "Limao" },
  ];
  // retorno da funcao
  const output = [{ id: 2, name: "Laranja" }];

  //validacao do retorno
  expect(filterByTerm(inputArr, "ra")).toEqual(output);
  expect(filterByTerm(inputArr, "RA")).toEqual(output);
});

test(" it should filter by a search term with another array", () => {
  const inputArray = [
    { id: 1, url: "http://www.devinhouse.tech" },
    { id: 2, url: "http://www.senai.com" },
  ];
  const output = [{ id: 2, url: "http://www.senai.com" }];
  expect(filterByTerm(inputArray, "senai", "url")).toEqual(output);
});
//validando exceções
test("should throw an error with empty array", () => {
  expect(() => filterByTerm([], "teste", "url")).toThrowError(
    "inputArray cannot be empty"
  );
});
