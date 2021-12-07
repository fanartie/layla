

const apiKey = process.env.APIKEY;


exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getArtistHandler only accept GET method, you tried: ${event.httpMethod}`);
    }

    console.info('received:', event);

    console.info('apiKey', apiKey);

    const items = [
        {name: 'Artie'}
    ];

    const response = {
        statusCode: 200,
        body: JSON.stringify(items)
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
