"use strict";

//indice inicial 0,   item 1    item 2
var redeSociais = ['Facebook', 'Instagram', 'Twitter'];
//for item atual ; enquanto i for menor que < redeSociais.length; a gente incrementa o i++
//i de indice            //quando fazemos o uso de length, vamos ter o retorno de todos os arrays
for (var i = 0; i < redeSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redeSociais[i]));
}

//com ECMASCRIPT 6 OU ES6
//forEach só intera as manipulações, mas não retorna valor
redeSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
//map tem retorno de um novo array
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
//criando novo array
var alunos2 = alunos.map(function (itemAtual) {
  //construindo o itemAtual objeto
  return {
    //item atual ainda é um array
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //true ou false
});

console.log(paula);
//retorna a numeração da Paula
var indiceDapaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; //true ou false
});

console.log(indiceDapaula);
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
//every temos a resposta de verdadeiro ou falso e podemos saber se todos os valores dentro do array correspondem a algum predicado, alguma condição
//verificação para todos os itens do array
var todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontEnd);
//precisa que apenas um item satisfaça a condição
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});

//tem acesso as propriedades dos arquivos filtrando

console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackEnd(aluno) {
  return aluno.curso === 'Backend';
}
var filtraAlunosDeBackEnd2 = function filtraAlunosDeBackEnd2(aluno) {
  return aluno.curso === 'Backend';
};
var AlunosDeBackend = alunos2.filter(filtraAlunosDeBackEnd);
console.log(AlunosDeBackend);
var nums = [10, 20, 30, 10];
//faz a agregação de valores e strings
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  //adiciona um valor novo, sem reduzir o valor anterior. Na string faz a concatenação
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);
// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function(numeroAtual){
//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros)