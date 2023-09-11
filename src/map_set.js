let meuMap = new Map();
meuMap.set("nome", "Mauricio");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

// meuMap.clear()

console.log(meuMap.size)

for(let chave of meuMap.keys()) {
    console.log(chave);
}

for(let valor of meuMap.values()) {
    console.log(valor);
}

// for(let entrada of meuMap.entries()) {
//     console.log(entrada);
// }

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

//os valores dentro de um set não podem se repetir, não temos o conjunto de chave e valor

const cpfs = new Set();

cpfs.add('47123749006')
cpfs.add ('25097260058')
cpfs.add ('26248918031')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

// convertendo array para set para eliminar duplicação de itens no array
const array = ['Gian Souza', 'Mauricio Mello', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)
