
const apiKey = process.env.APIKEY;
const axios = require('axios');
const endpoint = 'https://api.musixmatch.com/ws/1.1/';

exports.handler = async (event) => {

    let headers = {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*", // Allow from anywhere
        "Access-Control-Allow-Methods": "GET" // Allow only GET request
    };

    try {
        let query = event.queryStringParameters;

        let apiName = query.apiName;

        console.info('query', query);

        delete query.apiName;

        query.apikey = apiKey;

        let result = await axios.get(endpoint+apiName, {
            params: query
        })

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify(result.data)
        };

    } catch(err) {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify(err)
        };
    }

}


