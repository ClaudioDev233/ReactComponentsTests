const reverse = (str) =>
  str.split("").reduce((reversed, letter) => letter + reversed, "");

export default reverse;
