'use strict';
const controller = require('./components/balances/controller')

module.exports.updateBalance = async (event) => {
  const res = await controller.updateBalance(event.body)
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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.transfer = async (event) => {
  const res = await controller.transfer(event.body)
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'info sendMoney',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
