const store = require('./store')

const newOrder = async (body) => {
  let order = JSON.parse(body)

  return await store.newOrder(order)
}

module.exports = {
  newOrder
}