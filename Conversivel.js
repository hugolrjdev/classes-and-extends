class Conversivel extends Carro {

    constructor(){
        super();
        this._abrirCapota = console.log("Abrindo... Capota");
        this._fecharCapota = console.log("Fechando... Capota");
    }

    get abrirCapota(){
        return this._abrirCapota;
    }

    get fecharCapota(){
        return this._fecharCapota;
    }

}