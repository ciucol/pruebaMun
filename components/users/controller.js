const bcrypt = require('bcryptjs')
const store = require('./store')

const getUsers = async () => await store.getUsers()

const newUser = async (body) => {
  let user = JSON.parse(body)

  let salt = bcrypt.genSaltSync()
  let pass = bcrypt.hashSync(user.password, salt)

  let infoUser = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: pass,
    amount: user.amount
  }

  return await store.newUser(infoUser)
}

module.exports = {
  getUsers,
  newUser
}