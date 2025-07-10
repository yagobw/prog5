const original = {
  name: "Livro de JavaScript",
  details: {
    pages: 200
  }
};

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.pages = 555;
console.log(original.details.pages);