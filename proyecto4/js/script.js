const calcular = (radio, h) => {
  let areacirculo = (Math.PI * radio ** 2) / 2;
  let catetoOpuesto = Math.sqrt(h ** 2 - radio ** 2);
  areaTriangulo = (radio * catetoOpuesto) / 2;
  return areacirculo + areaTriangulo;
};

const area = () => {
  let radio = Number(document.getElementById("radio").value);
  let h = Number(document.getElementById("h").value);
  let resultado = document.getElementById("resultado");
  resultado.innerText = calcular(radio, h);
};
