const store = require('./store')

const newOrder = async (body) => {
  let order = JSON.parse(body)

  let infoOrder = {
    userId: order.userId,
    productsId: order.productsId,
    amount: order.amount
  }

  return await store.newOrder(infoOrder)
}

module.exports = {
  newOrder
}