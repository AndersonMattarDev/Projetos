// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rota para adicionar mensagens recebidas do frontend
server.post('/contatos', (req, res, next) => {
  const { nome, mensagem, email } = req.body;
  // Adicione a lógica para salvar as mensagens no arquivo db.json
  // Neste exemplo, vamos apenas retornar a mensagem recebida
  const newMessage = { id: Date.now(), nome, mensagem, email };
  router.db.get('contatos').push(newMessage).write();
  res.json(newMessage);
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});