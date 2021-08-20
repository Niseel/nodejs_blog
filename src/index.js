const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const path = require('path');
const db = require('../src/app/config/db');


// Connect DB
db.connectDB();

const app = express();
const port = 3000;
const route = require('./routes/index.route');

// Using static document
app.use(express.static(path.join(__dirname, 'public')));

// Using encode request parameters - bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan("dev")); //combined

// Templates engine
app.engine('hbs', handlebars({ 
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route initial
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}\n`);
    console.log('------========================================------\n');
});
