const increaseBalance = (infoAmount) => {
  try {
    return "Balance increased"
  } catch (error) {
    throw new Error(error)
  }
}

const transfer = (infoAmount) => {
  try {
    return "Successful transfer"
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  increaseBalance,
  transfer
}