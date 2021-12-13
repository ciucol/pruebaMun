const store = require('./store')

const getOrderByUser = async (params) => await store.getOrderByUser(params)

const newOrder = async (body) => {
  let order = JSON.parse(body)

  return await store.newOrder(order)
}

module.exports = {
  getOrderByUser,
  newOrder
}