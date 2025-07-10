const person = {
  name: "João",
  age: 30
};

const newPerson = {
  ...person,
  age: 31
};

console.log(person);
console.log(newPerson);