class Veiculo{
    placa = '';
    ano = 0000;

    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(placa){
        this.placa = placa;
    }

    setAno(ano){
        this.ano = ano;
    }

    getPlaca(){
        return this.placa;
    }

    getAno(){
        return this.ano;
    }

    exibirDados(){
        console.log(
            `placa: ${this.placa} \n
             ano: ${this.ano} `
        );
    }
}