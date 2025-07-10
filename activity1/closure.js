function criarContador() {
  let contador = 0;

  return function() {
    contador++;
    console.log(`Valor atual: ${contador}`);
  };
}

const contador1 = criarContador();
contador1();
contador1();

const contador2 = criarContador();
contador2();
