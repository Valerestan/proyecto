let positivos = 0;
let negativos = 0;
let numeros = [];

const agregar = () => {
  let numero = Number(document.getElementById("numero").value);

  numeros.push(numero);

  if (numero > 0) {
    positivos++;
  } else {
    negativos++;
  }

  document.getElementById("numero").value = "";

  document.getElementById("lista").innerHTML =
    "Números ingresados: " + numeros.join(", ");
};

const mostrar = () => {
  document.getElementById("resultado").innerHTML =
    "Mayores a 0: " +
    positivos +
    "<br>" +
    "Menores o iguales a 0: " +
    negativos;
};
