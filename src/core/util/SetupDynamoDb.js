const dynamoose = require("dynamoose");
const AWS = require("aws-sdk");

function setupDynamoDBClient() {
  if (!process.env.IS_LOCAL) {
    return;
  }

  const host = process.env.LOCALSTACK_HOST;
  const port = process.env.DYNAMODB_PORT;
  console.log("running dynamodb locally ", `http://${host}:${port}`);

  dynamoose.aws.ddb.local(`http://${host}:${port}`);
}

module.exports = setupDynamoDBClient;
