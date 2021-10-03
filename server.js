const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const { User, Comment, Post } = require('./models');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('.hbs', exphbs({ extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});