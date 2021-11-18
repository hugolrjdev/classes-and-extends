class Carro {
    constructor(){
        // this.nameDono = dono;
        this.cor = "Vermelho Sangue";
        this.fabricante = "Toyota";
        this.modelo = "Corolla XEI";
        this.valor = 350000;
        this.potencia = 110
    }

    acelerar (forca){
        console.log(`acelerou com a força ${forca}`);
    }

    frear(forca){
        console.log(`freiou com a força ${forca}`);
    }

    virar(graus){
        console.log(`virou ${graus}`);
    }

    abrir(){
        console.log('abrir porta');
    }

    fechar(){
        console.log('fechar porta');
    }

}