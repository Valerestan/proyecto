const ahorros = () => {
  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    contenedor.innerHTML += `
      <input type="number" id="mes${i}" 
      placeholder="Ingrese el ahorro del mes ${i}" />
      <br>
    `;
  }
};

const calcular = () => {
  let total = 0;

  for (let i = 1; i <= 12; i++) {
    let ahorro = Number(document.getElementById(`mes${i}`).value);
    total = total + ahorro;
  }

  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = `El ahorro total del año es: ${total}`;
};
