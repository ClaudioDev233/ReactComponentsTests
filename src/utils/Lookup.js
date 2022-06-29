const users = [
  {
    login: "danilo",
    firstName: "Danilo",
    lastName: "Sales",
    likes: ["Java", "React", "C"],
  },
  {
    login: "claudio",
    firstName: "Claudio",
    lastName: "Junior",
    likes: ["Tests", "React"],
  },
  {
    login: "andre",
    firstName: "André",
    lastName: "Motta",
    likes: ["Python", "React", "Diablo"],
  },
];

export function Lookup(login, property = "likes") {
  var user = users.find((x) => x.login === login);
  if (!user) throw Error("User not found");
  if (!user.hasOwnProperty(property)) throw Error("Property not found");

  return user[property];
}
