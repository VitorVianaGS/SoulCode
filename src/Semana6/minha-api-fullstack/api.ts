export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

export type CriarTarefaDTO = Omit<Tarefa, 'id'>;
export type AtualizarTarefaDTO = Partial<Omit<Tarefa, 'id'>>;

const BASE_URL = '/api/tarefas';

export async function listar(): Promise<Tarefa[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error(`Erro ao carregar tarefas (Status ${res.status})`);
  }
  return (await res.json()) as Tarefa[];
}

export async function criar(dados: CriarTarefaDTO): Promise<Tarefa> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });

  if (!res.ok) {
    throw new Error(`Erro ao cadastrar tarefa (Status ${res.status})`);
  }
  return (await res.json()) as Tarefa;
}

export async function atualizar(id: number, dados: AtualizarTarefaDTO): Promise<Tarefa> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });

  if (!res.ok) {
    throw new Error(`Erro ao atualizar tarefa (Status ${res.status})`);
  }
  return (await res.json()) as Tarefa;
}

export async function deletar(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!res.ok) {
    throw new Error(`Erro ao excluir tarefa (Status ${res.status})`);
  }
}