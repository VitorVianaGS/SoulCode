const BASE_URL = '/api/tarefas';
export async function listar() {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error(`Erro ao carregar tarefas (Status ${res.status})`);
    }
    return (await res.json());
}
export async function criar(dados) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });
    if (!res.ok) {
        throw new Error(`Erro ao cadastrar tarefa (Status ${res.status})`);
    }
    return (await res.json());
}
export async function atualizar(id, dados) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });
    if (!res.ok) {
        throw new Error(`Erro ao atualizar tarefa (Status ${res.status})`);
    }
    return (await res.json());
}
export async function deletar(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error(`Erro ao excluir tarefa (Status ${res.status})`);
    }
}
