const user = require('../models/user');

const user_index = (req, res) => {
  user.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { user: result, title: 'All user' });
    })
    .catch(err => {
      console.log(err);
    });
}

const user_details = (req, res) => {
  const id = req.params.nom;
  user.findById(id)
    .then(result => {
      res.render('details', { user: result, title: 'user Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'user not found' });
    });
}

const user_create_get = (req, res) => {
  res.render('create', { title: 'Create a new user' });
}

const user_create_post = (req, res) => {
  const aux = new user(req.body);
  aux.save()
    .then(result => {
      res.redirect('/users');
    })
    .catch(err => {
      console.log(err);
    });
}
const user_update=(req,res)=>{
  const id =req.params.email;
  user.findOneAndUpdate(id)
  .then(result => {
    res.json({ redirect: '/users' });
  })
  .catch(err => {
    console.log(err);
  });

}
const user_delete = (req, res) => {
  const id = req.params.email;
  user.findOneAndDelete(id)
    .then(result => {
      res.json({ redirect: '/users' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  user_index, 
  user_details, 
  user_create_get, 
  user_create_post, 
  user_update,
  user_delete
}