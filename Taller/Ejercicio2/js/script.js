const dato = () => {
  let numero = 10;
  let resultado = document.getElementById("resultado");

  let i = 0;
  do {
    resultado.innerHTML += `<input type="number" id="item${i}" placeholder="Ingrese numero ${i + 1}" /><br>`;
    i++;
  } while (i < numero);
};

dato();

const calcular = (numero) => {
  let suma = 0;
  let i = 0;

  do {
    suma += Number(document.getElementById(`item${i}`).value);
    i++;
  } while (i < numero);

  mostrar.innerHTML = `La suma es: ${suma}`;
};
