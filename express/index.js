const express = require('express');
//Biblioteca para manipular pastas
const path = require('path');
const app = express();
/*
M - Model = Banco de dados
V - View = Tudo sobre visualização
C - Controler = Consulta e gerenciamento
*/

app.set('view engine', 'ejs');

//Definição de arquivos estaticos
//Garante que o Node interprete o nome da pasta
const staticFolder = path.join(__dirname, 'views');
const expressStatic = express.static(staticFolder);
app.use(expressStatic);

/*
A forma padrão de definição de arquivos publicos e estaticos é essa abaixo:
app.use(express.static(path.join(__dirname, 'views')));
*/

//Definição de arquivos publicos
// const publicFolder = path.join(__dirname, 'public');
// const expressPublic = express.static(publicFolder);
// app.use(expressPublic);

//rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sobre', (req, res) => {
  res.send('Sobre');
});

//404 error
// middleware
app.use((req, res) => {
  res.send('Página não encontrada!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
