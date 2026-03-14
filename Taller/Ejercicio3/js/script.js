const dato = () => {
  let numero = 10;
  let resultado = document.getElementById("resultado");

  for (i = 0; i < numero; i++) {
    resultado.innerHTML += `<input type="number" id="item${i}" placeholder="Ingrese numero ${i + 1}" /><br>`;
  }
};

dato();

const calcular = (numero) => {
  let suma = 0;

  for (i = 0; i < numero; i++) {
    suma += Number(document.getElementById(`item${i}`).value);
  }

  mostrar.innerHTML = `La suma es: ${suma}`;
};
