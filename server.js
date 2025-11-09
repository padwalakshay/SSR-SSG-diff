import express from 'express';
const app = express();
import {ssr, ssg} from './data.js';
const port = 3000;

const ISR_Flag = false;

app.set('view engine', 'pug')

// SSG
import pug from 'pug';
const compiledFunction = pug.renderFile('views/template.pug', ssg);
app.get('/ssg', (req, res) => {
    res.send(compiledFunction);  
})

// SSR
app.get('/ssr', (req, res) => {
    res.render('sample', ssr);  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

