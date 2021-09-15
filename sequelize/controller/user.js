const db = require('../models')

const User = db.User

const userController = {
  login: (req, res) => {
    const { username, password } = req.body
    User.findOne({
      where: {
        username,
        password
      }
    }).then((user) => {
      if (!user) {
        res.send('wrong username or password')
        return
      }
      req.session.user = username
      req.session.userId = user.id
      res.send('nice. you have id now')
    }).catch((err) => {
      console.log(err)
      res.send('wrong username or password')
    })
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.send(err)
      }
    })
    res.send('session destroyed')
  },
  register: async (req, res) => {
    const { username, email, password, password2 } = req.body
    if (password !== password2) {
      res.send({
        ok: 0,
        message: "密碼不相同，請確認後再次提交"
      })
    }
    let result
    try {
      result = await User.create({
        username,
        password,
        email,
      })
    } catch(err) {
      res.send({
        ok: 0,
        message: err
      })
      return
    }
    if (result) {
      res.send({
        ok: 1,
        message: "success"
      })
    }
  }
}

module.exports = userController
