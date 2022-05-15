// routes/api/users.js

const express = require('express');
const router = express.Router();

// Load User model
const User = require('../../models/User');

// @route GET api/users
// @description sign up
// @access Public
router.post('/signup', (req, res) => {
  User.create(req.body)
    .then(user => res.json({ msg: 'User added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this User' }));
});

// @route GET api/users
// @description Get all users
// @access Public
router.get('/login', (req, res) => {
    console.log("hello")
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});

// @route GET api/users
// @description Get all users
// @access Public
router.get('/rec/:usrnm', async(req, res) => {
  try{
    var allUsers = await User.find()
    var me;
    for(var i = 0; i < allUsers.length; i++){
       if(allUsers[i].username == req.params.usrnm){
         me = allUsers[i];
         break;
       }
    }
    allUsers = allUsers.filter((user) => user.username != req.params.usrnm)
    
    var ranked = []
    for(var i = 0; i < allUsers.length; i++){
      var sim = 0;
      if(me.samegender === allUsers[i].samegender){
        sim += 1;
      }
      if(me.onthehill === allUsers[i].onthehill){
        sim += 1;
      }
      if(me.alchohol === allUsers[i].alchohol){
        sim += 1;
      }
      if(me.pets === allUsers[i].pets){
        sim += 1;
      }
      if(me.nightowl === allUsers[i].nightowl){
        sim += 1;
      }
      ranked.push([allUsers[i], sim])
    }
    ranked.sort((a,b) => b[1] - a[1])
    ranked = ranked.map((user) => user[0])
    res.json(ranked)
  } catch(e){
    console.log('No Users found')
  }
});

// @route GET api/users/:usrnm
// @description Get single user by username
// @access Public
router.get('/:usrnm', (req, res) => {
  User.findOne({username: req.params.usrnm})
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nousersfound: 'No User found' }));
});

module.exports = router;