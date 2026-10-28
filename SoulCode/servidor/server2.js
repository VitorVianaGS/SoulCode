const express = require('express');
const app = express();
app.use(express.json());

let clientes = [
  { codigo: "CLI001", nome: "Lucas", email: "lucas@email.com" },
  { codigo: "CLI002", nome: "Mariana", email: "mariana@email.com" },
  { codigo: "CLI003", nome: "Rafael", email: "rafael@email.com" },
  { codigo: "CLI004", nome: "Juliana", email: "juliana@email.com" },
  { codigo: "CLI005", nome: "Pedro", email: "pedro@email.com" },
  { codigo: "CLI006", nome: "Fernanda", email: "fernanda@email.com" },
  { codigo: "CLI007", nome: "Gabriel", email: "gabriel@email.com" },
  { codigo: "CLI008", nome: "Camila", email: "camila@email.com" },
  { codigo: "CLI009", nome: "Bruno", email: "bruno@email.com" },
  { codigo: "CLI010", nome: "Amanda", email: "amanda@email.com" },
  { codigo: "CLI011", nome: "Thiago", email: "thiago@email.com" },
  { codigo: "CLI012", nome: "Beatriz", email: "beatriz@email.com" },
  { codigo: "CLI013", nome: "Felipe", email: "felipe@email.com" },
  { codigo: "CLI014", nome: "Larissa", email: "larissa@email.com" },
  { codigo: "CLI015", nome: "Gustavo", email: "gustavo@email.com" },
  { codigo: "CLI016", nome: "Isabela", email: "isabela@email.com" },
  { codigo: "CLI017", nome: "Rodrigo", email: "rodrigo@email.com" },
  { codigo: "CLI018", nome: "Patricia", email: "patricia@email.com" },
  { codigo: "CLI019", nome: "Eduardo", email: "eduardo@email.com" },
  { codigo: "CLI020", nome: "Vanessa", email: "vanessa@email.com" }
];

app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

app.post('/api/clientes', (req, res) => {
  const novoCliente = {
    codigo: `CLI${String(clientes.length + 1).padStart(3, '0')}`,
    nome: req.body.nome,
    email: req.body.email
  };

  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

app.delete('/api/clientes/:codigo', (req, res) => {
  const codigoParaExcluir = req.params.codigo;

  clientes = clientes.filter(cliente => cliente.codigo !== codigoParaExcluir);

  res.status(204).send();
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

