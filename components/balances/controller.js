const store = require('./store')

const updateBalance = async (body) => {
  let amount = JSON.parse(body)

  return await store.updateBalance(amount)
}

const transfer = async (body) => {
  let transfer = JSON.parse(body)

  let infoTransfer = {
    senderId: transfer.senderId,
    receiverId: transfer.receiverId,
    amount: transfer.amount
  }

  return await store.transfer(infoTransfer)
}

module.exports = {
  updateBalance,
  transfer
}