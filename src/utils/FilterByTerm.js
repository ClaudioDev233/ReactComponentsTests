export function filterByTerm(inputArr, searchTerm, index = "name") {
  if (!inputArr.length) throw Error("inputArray cannot be empty");
  const regex = new RegExp(searchTerm, "i");

  return inputArr.filter((element) => {
    return element[index].match(regex);
  });
}
