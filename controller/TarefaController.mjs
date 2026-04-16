import { Tarefa } from '../model/tarefa.mjs';
import { TarefaService } from '../service/TarefaService.mjs';

const servico = new TarefaService();

export class TarefaController {
    adicionarTarefa(descricao) {
        const lista = servico.buscarTodas();
        const novaTarefa = new Tarefa(descricao); 
        lista.push(novaTarefa);
        servico.salvarTodas(lista);
        return novaTarefa;
    }

    listarTarefas() {
        return servico.buscarTodas();
    }

    atualizarTarefa(id, novosDados) {
        const lista = servico.buscarTodas();
        const indice = lista.findIndex(t => t.id === id);
        
        if (indice !== -1) {
            lista[indice] = { ...lista[indice], ...novosDados };
            servico.salvarTodas(lista);
        }
    }

    removerTarefa(id) {
        const lista = servico.buscarTodas().filter(t => t.id !== id);
        servico.salvarTodas(lista);
    }
    alternarConclusao(id) {
        const lista = servico.buscarTodas();
        const tarefa = lista.find(t => t.id === id);
        
        if (tarefa) {
            tarefa.concluida = !tarefa.concluida;
            servico.salvarTodas(lista);
        }
    }
}