const minhaFuncao = () => "Diz olá";

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})
console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    //incrementando em 10 a velocidade atual
    acelerar: function() {
        console.log(this)
        this.velocidadeAtual += 10;
    },
    //decrementando a velocidade
    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)