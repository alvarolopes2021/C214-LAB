class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){             
        super(placa, ano);   
        this.eixos = eixos;
    }

    setEixos(eixos){
        this.eixos = eixos;
    }

    getEixos(){
        return this.eixos;
    }

    exibirDados(){
        console.log(
            `CAMINHÃO \n placa: ${this.placa} \n ano: ${this.ano} \n eixos: ${this.eixos}
            `
        )
    }
}

var caminhao = new Caminhao('grrr-1515', 2020, 4);
caminhao.exibirDados();