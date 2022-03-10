class Onibus extends Veiculo{
    assentos = 0;

    constructor(placa, ano, assentos){
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(assentos){
        this.assentos = assentos;
    }

    getAssentos(){
        return this.assentos;
    }

    exibirDados(){
        console.log(
            `ÔNIBUS \n  placa: ${this.placa} \n  ano: ${this.ano} \n  assentos: ${this.assentos}
            `
        )
    }
}

var onibus = new Onibus('VOL-1212', 2009, 34);

onibus.exibirDados();