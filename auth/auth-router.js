const router = require('express').Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Users= require('./auth-model')


router.post('/register', (req, res) => {


  const cred = req.body
  const hash = bcrypt.hashSync(cred.password,10)
  cred.password = hash

  Users.addUser(cred)
  .then((userr)=>{
    res.status(201).json({
      data:userr,
      message:"you registrated"
    })
    const token = newToken(uuser)
    console.log(token)
  })
  .catch((err) => {
    console.log({ err });
    res.status(500).json({
      message: "you no register ",
    });
  });


});

router.post('/login', (req, res) => {


  const {username,password}=req.body
  Users.findBy({username})
  .then(([uuser])=>{
    if(uuser && bcrypt.compareSync(password,uuser.password)){
    // const token = newToken(uuser)
    console.log('yes',uuser)

    res.status(200).json({
      message:`what?,${uuser.username}`
      // ,token
    })
  }else{
    res.status(401).json({
      message: "Invalid credentialos",
    });
  }
  })

  .catch((err) => {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  });


});

function newToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '1h'
  }
  return jwt.sign(payload, process.env.JWT_SECRET,options)

}

module.exports = router;
