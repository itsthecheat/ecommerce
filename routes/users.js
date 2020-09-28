import express from 'express'
import User from '../models/userModel'

const router = express.Router();

router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      firstname: 'Leslie',
      lastname: 'Behum',
      email: 'admin@admin.com',
      password: '1234',
      isAdmin: true
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});


router.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      firstname: signinUser.firstname,
      lastname: signinUser.lastname,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(user)
    })
  } else {
    res.status(401).send({msg: 'Email or Password Invalid'})
  }
})

router.post('/create', async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  })
  const newUser = await user.save()
  if (newUser) {
    res.send({
      _id: newUser.id,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser)
    })
  } else {
    res.status(401).send({msg: 'Data Invalid'})
  }
})

export default router;
