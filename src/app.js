import express from 'express';
const app = express();

//Indicar para ler o body como JSON
app.use(express.json());

//Mock
const inventario = [
    {"id": 1,"item": 'Arroz',"quantidade": 8},
    {"id": 2,"item": 'Feijão',"quantidade": 3},
    {"id": 3,"item": 'Açúcar',"quantidade": 2},
    {"id": 4,"item": 'Macarrão',"quantidade": 5}
];

//Função para recuperar elemento por ID
function buscarItemPorId (id) {
    return inventario.filter(inventario => inventario.id === id);
};

//Função ´para pegar a posição e index de um item por id dentro do array
function buscarIndexItem (id) {
    return inventario.findIndex(inventario => inventario.id === id);
};

//Cria a rota raiz
app.get('/', (req, res) => {
    res.send("Sistema de Inventário");
})

//Lista o Inventário
app.get('/inventario', (req, res) => {
    res.status(200).send(inventario)
})

//Atualiza um item
//Cadastra um novo item
app.post('/inventario', (req, res) => {
    inventario.push(req.body);
    res.status(201).send('Item cadastrado com sucesso')
})
//Deleta um item
app.delete('/inventario:id', (req, res) => {
    let index = buscarIndexItem(req.params.id);
    inventario.splice(index, 1);
    res.send(`Item de ID ${req.params.id} deletado com sucesso!`);
});

export default app;
