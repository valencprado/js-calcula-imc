// código corrigido: 
// uma função para cada coisinha


const form = document.querySelector('#form');
  form.addEventListener('submit', function (e){
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if(!peso){
    setResultado('Peso inválido!', false);
    return
  }
  if(!altura){
    setResultado('Altura inválida!', false);
    return
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc}. ${nivelImc}`;
  setResultado(msg, true);
});

function getNivelImc(){
  // INVERTENDO A LÓGICA: CHECANDO DE TRÁS PRA FRENTE
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 
  'Obesidade Grau 2', 'Obesidade Grau 3']
  if(imc >= 39.9) return nivel[5];
  if(imc >= 34.9) return nivel[4];
  if(imc >= 29.9) return nivel[3];
  if(imc >= 24.9) return nivel[2];
  if(imc >= 18.5) return nivel[1];
  if(imc < 18.5) return nivel[0];
  // o jeito abaixo é certo, mas é desnecessário (o return vai parar a função)
  // se o if tem uma linha só, ele não precisa de bloco
  // if(imc >= 39.9){
  //   return nivel[5];
  // }else if(imc >= 34.9){
  //   return nivel[4];
  // }else if(imc >= 29.9){
  //   return nivel[3];
  // }else if(imc >= 24.9){
  //   return nivel[2];
  // }else if(imc >= 18.5){
  //   return nivel[1];
  // }else if(imc < 18.5){
  //   return nivel[0];
  // }


}


function getImc(peso, altura){
imc = peso / altura**2;
return imc.toFixed(2);
}
function criaP(){
  // cria parágrafo
  const p = document.createElement('p'); // p -> parágrafo
  return p;
}
// capturar o resultado para mandar uma mensagem usando o parâmetro
function setResultado(msg, isValid){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = ``; // fica a div em branco
  const p = criaP();
  if(isValid) {
    p.classList.add('paragrafo-resultado');
  }else{
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

