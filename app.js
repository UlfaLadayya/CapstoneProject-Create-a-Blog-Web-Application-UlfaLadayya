const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const path = require('path');
const { title } = require('process');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) =>{
    res.render('index', { title: 'Halaman Dashboard' });
});

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});