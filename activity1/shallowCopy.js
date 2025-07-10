const original = {
  name: "Livro",
  details: {
    pages: 200
  }
};

const shallowCopy = { ...original };
shallowCopy.details.pages = 425;
console.log(original);