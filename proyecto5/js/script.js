/*  Nombre del proyecto: Ciclos
Autor: Valentina Restan
Entidad: Sena */

// CICLO FOR:  el ciclo for tiene: definicion, condicion, incremento

/*EJERCICIO 1: Imprimir los nombres de los clientes
let clientes = ["Pedro", "Laura", "German"];
for (let i = 0; i < clientes.length; i++) {
console.log(clientes[i]); }*/

/*EJERCICIO 2: Imprimir salario de los clientes
let empleados = ["Juan", "Maria", "Laura"];
let horasTrabajadas = [69, 45, 3];
let costoHora = [14000, 13000, 500000];
let resultado = [];
for (let i = 0; i < empleados.length; i++) {
  resultado[i] = horasTrabajadas[i] * costoHora[i];
}
for (let i = 0; i < resultado.length; i++) {
  console.log(
    `El empleado ${empleados[i]} 
    trabajo ${horasTrabajadas[i]} 
    para un total de $${resultado[i].toLocaleString()}`,
  );
} */

// CICLO WHILE: el ciclo while tiene: definicion, condicion, incremento

const recuperarDatos = () => {
  let cantidad = Number(document.getElementById("cantidad").value);
  calcularNotas(cantidad);
  calcularPromedio(cantidad);
};

const calcularNotas = (cantidad) => {
  let contenedor = document.getElementById("contenedor");

  let i = 1;
  while (i <= cantidad) {
    contenedor.innerHTML += `<input id="nota${i}" placeholder="Ingrese nota${i}" />`;
    i++;
  }
};

const calcularPromedio = (cantidad) => {
  let suma = 0;
  for (let i = 1; i <= cantidad; i++) {
    suma = suma + Number(document.getElementById(`nota${i}`).value);
  }
  let promedio = suma / cantidad;
  document.getElementById("resultado").innerHTML =
    `El promedio es: ${promedio}`;
};
