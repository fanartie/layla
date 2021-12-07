const lambda = require('../../../src/handlers/getArtist.js');

describe('Test getArtistHandler', () => {

 
    it('should return ids', async () => { 
        const items = [{ id: 'id1' }, { id: 'id2' }]; 

        const event = { 
            httpMethod: 'GET' 
        } 
 
        // Invoke helloFromLambdaHandler() 
        const result = await lambda.getArtistHandler(event);
 
        const expectedResult = { 
            statusCode: 200, 
            body: JSON.stringify(items) 
        }; 
 
        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult); 
    }); 
}); 
