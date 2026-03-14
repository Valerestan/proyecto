const dato = () => {
  let numero = 10;
  let resultado = document.getElementById("resultado");

  let i = 0;
  while (i < numero) {
    resultado.innerHTML += `<input type="number" id="item${i}" placeholder="Ingrese numero ${i + 1}" /><br>`;
    i++;
  }
};

dato();

const calcular = (numero) => {
  let suma = 0;
  let i = 0;

  while (i < numero) {
    suma += Number(document.getElementById(`item${i}`).value);
    i++;
  }

  mostrar.innerHTML = `La suma es: ${suma}`;
};
