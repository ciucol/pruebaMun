const newOrder = (infoOrder) => {
  try {
    return "Order created"
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  newOrder
}