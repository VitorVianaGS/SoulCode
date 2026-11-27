import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('.'));
let tarefas = [
    { id: 1, titulo: 'Configurar ambiente em TypeScript', concluida: true },
    { id: 2, titulo: 'Configurar front-end com API REST', concluida: false }
];
let proximoId = 3;
app.get('/api/tarefas', (_req, res) => {
    setTimeout(() => {
        res.status(200).json(tarefas);
    }, 1000);
});
app.post('/api/tarefas', (req, res) => {
    const corpo = req.body;
    if (!corpo.titulo || typeof corpo.titulo !== 'string' || corpo.titulo.trim() === '') {
        res.status(400).json({ erro: 'O campo titulo é obrigatório.' });
        return;
    }
    const novaTarefa = {
        id: proximoId++,
        titulo: corpo.titulo.trim(),
        concluida: Boolean(corpo.concluida)
    };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});
app.put('/api/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = tarefas.findIndex((t) => t.id === id);
    if (indice === -1) {
        res.status(404).json({ erro: 'Tarefa não encontrada.' });
        return;
    }
    const dadosAtualizados = req.body;
    if (dadosAtualizados.titulo !== undefined) {
        if (typeof dadosAtualizados.titulo !== 'string' || dadosAtualizados.titulo.trim() === '') {
            res.status(400).json({ erro: 'O título não pode ficar vazio.' });
            return;
        }
        tarefas[indice].titulo = dadosAtualizados.titulo.trim();
    }
    if (dadosAtualizados.concluida !== undefined) {
        tarefas[indice].concluida = Boolean(dadosAtualizados.concluida);
    }
    res.status(200).json(tarefas[indice]);
});
app.delete('/api/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = tarefas.findIndex((t) => t.id === id);
    if (indice === -1) {
        res.status(404).json({ erro: 'Tarefa não encontrada.' });
        return;
    }
    tarefas.splice(indice, 1);
    res.status(204).send();
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
