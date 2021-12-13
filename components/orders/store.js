const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getOrderByUser = async ({ id }) => {
  try {
    const orders = await prisma.user.findMany({
      where: {
        id
      },
      include: {
        Order: true
      }
    })

    return orders
  } catch (error) {
    return error
  } finally {
    await prisma.$disconnect()
  }
}

const newOrder = async ({ userId, description, amount }) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if (user.balance >= amount) {
      const newOrder = await prisma.order.create({
        data: {
          description,
          amount,
          buyerId: userId
        }
      })

      const newBalance = user.balance - amount

      await prisma.user.update({
        where: {
          id: userId
        },
        data: {
          balance: newBalance
        }
      })

      return { newOrder, newBalance }
    } else {
      throw new Error("There is not enough money")
    }
  } catch (error) {
    throw error.message
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = {
  getOrderByUser,
  newOrder
}