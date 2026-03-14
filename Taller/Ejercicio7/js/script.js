let suma = 0;
let contador = 0;

const agregar = () => {
  let estatura = Number(document.getElementById("estatura").value);

  if (estatura > 0) {
    suma = suma + estatura;
    contador = contador + 1;
  }

  document.getElementById("estatura").value = "";
};

const calcular = () => {
  let promedio = suma / contador;
  document.getElementById("resultado").innerHTML =
    "El promedio de estatura es: " + promedio;
};
