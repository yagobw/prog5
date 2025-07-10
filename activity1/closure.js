function createCount() {
  let count = 0;

  return function() {
    count++;
    console.log(`Valor atual: ${count}`);
  };
}

const counter1 = createCount();
counter1();
counter1();

const counter2 = createCount();
counter2();
