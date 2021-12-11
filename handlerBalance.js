'use strict';
const controller = require('./components/balances/controller')

module.exports.updateBalance = async (event) => {
  const res = await controller.updateBalance(event.pathParameters, event.body)
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
};

module.exports.transfer = async (event) => {
  const res = await controller.transfer(event.body)
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
};
