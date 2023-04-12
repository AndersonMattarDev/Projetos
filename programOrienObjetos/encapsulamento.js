// Estrutural
/*let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()
console.log(calcularArea())*/

// Orientada a objetos

class Poligono {// se criado com a primeira letra maiuiscula
    constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
    }

        get area() {
            return this.#calcularArea() // O simbulo # indica que nao ficara fisivel para o usuario
        }
        #calcularArea() {
            return this.altura * this.largura
        }
}

// criar o objeto

let poligono = new Poligono(50, 60) // aqui deve c=ser chamado com letra maiuscula
console.log(poligono.area)