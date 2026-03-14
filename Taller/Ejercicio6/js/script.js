const dato = () => {
  let estudiantes = Number(document.getElementById("estudiantes").value);
  enviar(estudiantes);
};

const enviar = (estudiantes) => {
  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  let i = 0;
  while (i < estudiantes) {
    contenedor.innerHTML += `<input type="number" id="nota${i}" placeholder="Ingrese su nota ${i + 1}" /><br>`;
    i++;
  }

  contenedor.innerHTML += `<br><button onclick="calcular(${estudiantes})">Calcular</button>`;
};

const calcular = (estudiantes) => {
  let suma = 0;
  let i = 0;

  while (i < estudiantes) {
    suma += Number(document.getElementById(`nota${i}`).value);
    i++;
  }

  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML += `<p>El promedio es: ${suma / estudiantes}</p>`;
};
