let listaDepessoas = [];
function adicionar() {
  let nomeDigitado = document.getElementById("nome-amigo").value;
  document.getElementById("nome-amigo").value = "";
  if (nomeDigitado == "" || nomeDigitado == " ") {
    alert("não digitou nenhum nome");
  } else if (listaDepessoas.includes(nomeDigitado)) {
    alert("nome ja digitado");
  } else {
    listaDepessoas.push(nomeDigitado);
    document.getElementById("lista-amigos").textContent = listaDepessoas;
  }
}
function sortear() {
  document.getElementById("lista-sorteio").textContent = "";
  if (listaDepessoas.length >= 2) {
    let numeros = doisnumerosaleatorios();
    while (numeros.length > 0) {
      let amigos = document.getElementById("lista-sorteio");
      let elemento = document.createElement("section");
      elemento.textContent = `${listaDepessoas[numeros[0]]} --> ${listaDepessoas[numeros[1]]}`;
      amigos.appendChild(elemento);
      numeros.shift();
      numeros.shift();
    }
  } else {
    alert("por favor digite pelo menos 2 pessoas");
  }
}
function doisnumerosaleatorios() {
  let listaaleatoria = [];
  let maximo = listaDepessoas.length;
  let aleatorio;
  for (let i = 1; i <= maximo; i++) {
    aleatorio = parseInt(Math.random() * (maximo - 1 + 1) + 0);
    if (listaaleatoria.includes(aleatorio)) {
      i--;
    } else {
      listaaleatoria.push(aleatorio);
    }
  }
  return listaaleatoria;
}
function reiniciar() {
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").textContent = "";
  listaDepessoas = [];
}
