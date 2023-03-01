const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;

app.use(cors());


// SSR - server side rendering
const menu = `
<a href="/">home</a>
<a href="/racoon">racoon</a>
<a href="/fox">fox</a>
`;

app.get('/', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello Forest!</h1>
    `);
});

app.get('/racoon', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello RACOON!</h1>
    `);
});

app.get('/fox', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello FOX!</h1>
    `);
});

// API

app.get('/api/home', (req, res) => {
    res.json({ title: `Hello Forest!`, color: `pink` })
});

app.get('/racoon', (req, res) => {
    res.json({ title: `Hello RACOON!`, color: `skyblue` })
});

app.get('/fox', (req, res) => {
    res.json({ title: `Hello FOX!`, color: `yellow` })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

