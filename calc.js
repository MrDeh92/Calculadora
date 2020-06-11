var displayBuffer = "";
var numero = "";
var termo = [undefined, undefined, undefined];
var result = undefined;

function pressNum(num) {
  numero = numero.concat(num.innerHTML);
  showDisplay(num.innerHTML);
}

function clearDisplay() {
  displayBuffer = "";
  var tela = document.getElementById("display");
  tela.value = displayBuffer;
}

function clearMemory() {
  numero = "";
  termo = [undefined, undefined, undefined];
  result = undefined;
}

function clearAll() {
  clearDisplay();
  clearMemory();
}

function showDisplay(conteudo) {
  displayBuffer = displayBuffer.concat(conteudo);
  var tela = document.getElementById("display");
  tela.value = displayBuffer;
}

function pressOperator(op) {
    if(temo[1])!=undefined){

        termo[0] = numero;
  termo[1] = op.innerHTML;
  showDisplay(op.innerHTML);
  numero = "";
    }

    //Fora da condição nada acontece
  
}

function pressEqual() {
  termo[2] = numero;
  var keepresult;
  switch (termo[1]) {
    case "+":
      result = result = Number(termo[0]) + Number(termo[2]);
      break;
    case "-":
      result = Number(termo[0]) - Number(termo[2]);
      break;
    case "x":
      result = Number(termo[0]) * Number(termo[2]);
      break;
    case "/":
      result = Number(termo[0]) / Number(termo[2]);
      break;
  }
  keepresult = result;
  clearDisplay();
  showDisplay(result);
  clearMemory();
  numero = keepresult;
}
