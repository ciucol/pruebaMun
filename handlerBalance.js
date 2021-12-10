'use strict';

module.exports.increaseBalance = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'info increaseBalance',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.sendMoney = async (event) => {
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
