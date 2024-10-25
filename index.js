const express = require('express');
const path = require('path');
const UserRoute = require('./routes/user');
const app = express();
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const cheackForAuthCookie = require('./middleware/authentication')
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());
app.use(cheackForAuthCookie("token"))

app.use(express.urlencoded({extended:false}))

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/blogify')
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.get('/', (req, res) => {
    res.render('home',{
        user:req.user,
    });
});

app.use('/user', UserRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
