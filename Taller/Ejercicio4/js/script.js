const dato = () => {
  let estudiantes = Number(document.getElementById("estudiantes").value);
  enviar(estudiantes);
};

const enviar = (estudiantes) => {
  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  for (let i = 0; i < estudiantes; i++) {
    contenedor.innerHTML += `<input type="number" id="nota${i}" placeholder="Ingrese su nota ${i + 1}" /><br>`;
  }

  contenedor.innerHTML += `<br><button onclick="calcular(${estudiantes})">Calcular</button>`;
};

const calcular = (estudiantes) => {
  let suma = 0;

  for (let i = 0; i < estudiantes; i++) {
    suma += Number(document.getElementById(`nota${i}`).value);
  }

  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML += `<p>El promedio es: ${suma / estudiantes}</p>`;
};
