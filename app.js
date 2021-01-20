const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/UserRoutes');


const app = express();

const dbURI = "mongodb+srv://admin:admin@cluster0.ruxc0.mongodb.net/user?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {app.listen(3000)
  console.log('connect to  =>localhost:3000/users')})
  .catch(err => console.log(err));


app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


app.get('/', (req, res) => {
  res.redirect('/users');
});




app.use('/users', UserRoutes);


app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});