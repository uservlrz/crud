export class Tarefa {
    constructor(descricao) {
        this.id = Date.now().toString(); 
        this.descricao = descricao;
        this.concluida = false;
    }
}
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaa