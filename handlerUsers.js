'use strict';
const controller = require("./components/users/controller")

module.exports.getUsers = async (event, context) => {
  try {
    const res = await controller.getUsers()
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
    context.serverlessSdk.captureError(error);
  }
};

module.exports.newUser = async (event) => {
  const res = await controller.newUser(event.body)
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
