'use strict';
const controller = require('./components/orders/controller')
// ///////////////// 2 return gas
module.exports.newOrder = async (event) => {
  try {
    const res = await controller.newOrder(event.body)
    return {
      statusCode: 201,
      body: JSON.stringify(
        {
          message: res,
          input: event,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: error,
          input: event,
        },
        null,
        2
      ),
    };
  }
};
