const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const updateBalance = async ({ id: userId }, { amount }) => {
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

const transfer = async ({ senderId, receiverId, amount }) => {
  try {
    const sender = await prisma.user.findUnique({
      where: {
        id: senderId
      }
    })

    if (sender.balance >= amount) {
      const receiver = await prisma.user.findUnique({
        where: {
          id: receiverId
        }
      })

      console.log(receiver.balance)
      const modifyBalanceReceiver = receiver.balance += parseInt(amount)
      console.log(modifyBalanceReceiver)
      const modifyBalanceSender = sender.balance -= amount

      await prisma.user.update({
        where: {
          id: senderId
        },
        data: {
          balance: modifyBalanceSender
        }
      })

      await prisma.user.update({
        where: {
          id: receiverId
        },
        data: {
          balance: modifyBalanceReceiver
        }
      })
    } else {
      return "There is not enough money"
    }

    return "Transfer done"
  } catch (error) {
    return error
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = {
  updateBalance,
  transfer
}