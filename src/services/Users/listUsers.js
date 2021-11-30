import { Auth, API } from 'aws-amplify';
let nextToken;
    async function listUsers(limit){
        let apiName = 'AdminQueries';
        let path = '/listUsers';

        let myInit = { 
            queryStringParameters: {
              "limit": limit,
              "token": nextToken
            },
            headers: {
              'Content-Type' : 'application/json',
              Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }

        const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
        nextToken = NextToken;
    return rest;
    }

export default listUsers;