const express = require('express');
const expbhs = require('express-handlebars');

const app = express();

app.set('views', path.join(___dirname, 'views'));
app.engine('.hbs', expbhs () => {
    defaultlayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
});

// middlewares
app.use(express.urlencoded(extended: false)});
app.use(express.json());

app.use(require('routes/index'));
app.use express(static(path.join(__dirname, 'public')))
app.listen(3000, () =>{
    console.log('Server on port', 3000);

});