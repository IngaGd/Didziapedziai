const express = require('express');
const app = express();
const port = 3003;


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
    res.json({ title: `Hello Forest!` })
});

app.get('/racoon', (req, res) => {
    res.json({ title: `Hello RACOON!` })
});

app.get('/fox', (req, res) => {
    res.json({ title: `Hello FOX!` })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});