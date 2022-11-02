'use strict';
const aws = require('aws-sdk');
const dynamoDb = new aws.DynamoDB.DocumentClient();

module.exports.getManager = async (event) => {
	let response;

	const teamId = event.pathParameters.teamId;

	switch (true) {
		case teamId === '-1':
			response = sendResponse(404, 'TEAM ID EMPTY');
			break;

		default:
			const result = await getManager(teamId);
			console.log('result in switch ========= ', result);
			response = {
				statusCode: 200,
				body: JSON.stringify(result),
			};
	}

	return response;
};
