function applyOperation(a, b, operation) {
  return operation(a, b);
}

function sum(x, y) {
  return x + y;
}

function multiplication(x, y) {
  return x * y;
}

console.log(applyOperation(3, 4, sum));
console.log(applyOperation(3, 4, multiplication));
