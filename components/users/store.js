const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany()

    return users
  } catch (error) {
    return error.message
  } finally {
    await prisma.$disconnect
  }
}

const newUser = async ({ name, lastname, email, password, amount }) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        lastname,
        email,
        password,
        balance: amount
      }
    })

    return user
  } catch (error) {
    return (error.message)
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = {
  getUsers,
  newUser
}