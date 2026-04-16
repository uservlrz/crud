import { TarefaController } from './controller/TarefaController.mjs';

const controle = new TarefaController();
const formulario = document.getElementById('form-tarefa');
const entradaTexto = document.getElementById('txt-tarefa');
const tabela = document.getElementById('corpo-tabela');

function renderizar() {
    const lista = controle.listarTarefas();
    tabela.innerHTML = '';

    lista.forEach(item => {
        const linha = document.createElement('tr');
        
        linha.innerHTML = `
            <td>
                <input type="checkbox" class="form-check-input" 
                    ${item.concluida ? 'checked' : ''} 
                    onclick="trocarStatus('${item.id}')">
            </td>
            <td class="${item.concluida ? 'concluida' : ''}">
                ${item.descricao}
            </td>
            <td class="text-end">
                <button class="btn btn-sm btn-outline-primary me-2" onclick="editar('${item.id}')">Editar</button>
                <button class="btn btn-sm btn-outline-danger" onclick="remover('${item.id}')">Excluir</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

window.trocarStatus = (id) => {
    controle.alternarConclusao(id);
    renderizar();
};

window.editar = (id) => {
    const novoTexto = prompt("Atualizar descrição da tarefa:");
    if (novoTexto && novoTexto.trim() !== "") {
        controle.atualizarTarefa(id, { descricao: novoTexto.trim() });
        renderizar();
    }
};

window.remover = (id) => {
    if (confirm("Deseja apagar esta tarefa?")) {
        controle.removerTarefa(id);
        renderizar();
    }
};

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const valor = entradaTexto.value.trim();
    if (valor) {
        controle.adicionarTarefa(valor);
        entradaTexto.value = '';
        renderizar();
    }
});

renderizar();