// routes/api/users.js

const express = require('express');
const multer = require("multer")
const router = express.Router();

// Load User model
const User = require('../../models/User');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({storage: storage});

// @route GET api/users
// @description sign up
// @access Public
router.post('/signup', upload.single("articleImage"), (req, res) => {
  var info = req.body
  info["articleImage"] = req.file.originalname;
  User.create(info)
    .then(user => res.json({ msg: 'User added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this User' }));
});

// @route PUT api/users
// @description update info
// @access Public

router.put('/update/:usrnm', upload.single("articleImage"), async(req, res) => {
  console.log("coming here!")
  var info = req.body
  info["articleImage"] = req.file.originalname;
  var allUsers = await User.find()
    var me;
    for(var i = 0; i < allUsers.length; i++){
       if(allUsers[i].username == req.params.usrnm){
         me = allUsers[i];
         break;
       }
    }
    console.log(me.gender);
  me.updateOne(info)
    .then(user => res.json({ msg: 'User updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update this User' }));
});

// @route GET api/users
// @description Get all users
// @access Public
router.get('/allUsers', (req, res) => {
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

// @route PUT api/users/saved/:usrnm
// @description Update a single user's saved Profile List
// @access Public
router.put('/saved/:usrnm', (req, res) => {
  User.findOneAndUpdate({username: req.params.usrnm}, req.body)
  .then(book => res.json({ msg: 'Updated successfully' }))
  .catch(err =>
    res.status(400).json({ error: 'Unable to update the Database' })
  );
});

module.exports = router;