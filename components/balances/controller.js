const store = require('./store')

const updateBalance = async (params, body) => {
  let amount = JSON.parse(body)

  return await store.updateBalance(params, amount)
}

const transfer = async (body) => {
  let transfer = JSON.parse(body)

  return await store.transfer(transfer)
}

module.exports = {
  updateBalance,
  transfer
}