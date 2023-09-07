//REST
function somar() {
    let soma = 0;
    //arguments é interável e podemos usar o for. Mas ele não é um array
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma;
    //retorna todas os argumentos passados na função
    // console.log(arguments)
    // return a + b + c;
}

console.log(somar(10,20, 30))


//operador rest devemos colocar '...' para usar inúmeros argumentos
//rest operator não pode ter 2 argumentos.
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

//SPREAD

const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

//timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
console.log(timesDeFutebol)

//com spread podemos aproveitar as propriedades de outro objeto. No dia a dia podemos usar para copiar objetos sem sobreescrever
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

//desestruturação

//funciona criando uma variável, dentro das chaves passamos a propriedade e no = passamos o objeto
//acessamos usando um alias ou seja apelido
const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

//desestruturação também pode ser usada em arrays
//ao invés de colocar chaves, colocamos colchetes
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)