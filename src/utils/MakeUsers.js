const makeUser = (name, hobbies = []) => {
  return {
    name,
    hobbies,
  };
};

export default makeUser;
