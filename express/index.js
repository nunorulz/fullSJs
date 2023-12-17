const express = require('express');
//Biblioteca para manipular pastas
const path = require('path');
const fs = require('fs');

const app = express();

//definindo o template engine
app.set('view engine', 'ejs');

//Definição de arquivos estaticos
//Garante que o Node interprete o nome da pasta
// const staticFolder = path.join(__dirname, 'views');
// const expressStatic = express.static(staticFolder);
// app.use(expressStatic);
app.use(express.static(path.join(__dirname, 'public')));

//Permite o servidor receber arquivos de formularios via POST
app.use(express.urlencoded({ extended: true }));

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
  res.render('index', {
    title: 'Digital Tech - Página inicial',
  });
});

app.get('/cadastro-posts', (req, res) => {
  const { c } = req.query;

  res.render('cadastro-posts', {
    title: 'Digital Tech - Cadastrar Post',
    cadastrado: c,
  });
});

app.post('/salvar-post', (req, res) => {
  const { titulo, texto } = req.body;

  const data = fs.readFileSync('./store/posts.json');
  const post = JSON.parse(data);

  post.push({
    titulo,
    texto,
  });
  const postsString = JSON.stringify(post);
  fs.writeFileSync('./store/posts.json', postsString);
  res.redirect('/cadastro-posts?c=1');
});

app.get('/posts', (req, res) => {
  res.render('posts', {
    title: 'Digital Tech - Posts',
    posts: [
      {
        title: 'Novidade no mundo da tecnologia',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, harum. Omnis, porro ea cum facilis iusto iure illo laboriosam a labore quibusdam aut voluptas nam amet minima dolore eius repellat!',
        stars: 3,
      },
      {
        title: 'Servidor com node.js',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, harum. Omnis, porro ea cum facilis iusto iure illo laboriosam a labore quibusdam aut voluptas nam amet minima dolore eius repellat!',
        stars: 2,
      },
      {
        title: 'Javascript é a linguagem mais usada da internet',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, harum. Omnis, porro ea cum facilis iusto iure illo laboriosam a labore quibusdam aut voluptas nam amet minima dolore eius repellat!',
        stars: 5,
      },
    ],
  });
});

//404 error
// middleware
app.use((req, res) => {
  res.send('Página não encontrada!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
