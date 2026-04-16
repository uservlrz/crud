const CHAVE = 'lista_tarefas';

export class TarefaService {
    buscarTodas() {
        const dados = localStorage.getItem(CHAVE);
        return dados ? JSON.parse(dados) : [];
    }

    salvarTodas(tarefas) {
        localStorage.setItem(CHAVE, JSON.stringify(tarefas));
    }
}