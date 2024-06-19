const express = require('express');
const path = require('path');
const app = express();
const UserRoute = require('./routes/user')
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/user',UserRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
