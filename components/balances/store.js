const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const updateBalance = async ({ userId, amount }) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    const increase = user.balance + amount

    const newBalance = await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        balance: increase
      }
    })

    return newBalance
  } catch (error) {
    return error
  } finally {
    await prisma.$disconnect()
  }
}

const transfer = () => {
  try {
    return "Successful transfer"
  } catch (error) {
    return error
  }
}

module.exports = {
  updateBalance,
  transfer
}