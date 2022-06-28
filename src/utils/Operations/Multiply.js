// multiplica 2 valores

export function Multiply(num1, num2) {
  if (isNaN(num1) || isNaN(num2))
    throw Error("One of the parameters is not a number");
  return num1 * num2;
}
