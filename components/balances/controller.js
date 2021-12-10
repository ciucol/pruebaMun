const store = require('./store')

const increaseBalance = async (body) => {
  let amount = JSON.parse(body)

  let infoAmount = {
    userId: amount.userId,
    amount: amount.amount
  }

  return await store.increaseBalance(infoAmount)
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
  increaseBalance,
  transfer
}