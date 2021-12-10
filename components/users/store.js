const newUser = (infoUser) => {
  try {
    return "User created"
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  newUser
}