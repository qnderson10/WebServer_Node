require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Anderson Gonzalez',
        titulo: 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Anderson Gonzalez',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Anderson Gonzalez',
        titulo: 'Curso de node'
    });
});

app.get('*', (req, res) => {
    res.send('404 | page not found')
});
  

app.listen(port)