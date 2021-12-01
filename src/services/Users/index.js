import { Auth, API } from 'aws-amplify';
import AWS from 'aws-sdk';
    export async function listUsers(limit){
        let apiName = 'AdminQueries';
        let path = '/listUsers';
        let nextToken;
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

    export async function getUser(username){
        let apiName = 'AdminQueries';
        let path = '/getUser';
        let myInit = { 
            queryStringParameters: {
              "username": username
            },
            headers: {
              'Content-Type' : 'application/json',
              Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }

        const { ...rest } =  await API.get(apiName, path, myInit);
    return rest;
    }

    export async function disableUser(username){
      let apiName = 'AdminQueries';
        let path = '/disableUser';
        let myInit = { 
            queryStringParameters: {
              "username": username
            },
            headers: {
              'Content-Type' : 'application/json',
              Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }

        const { ...rest } =  await API.get(apiName, path, myInit);
    return rest;
    }

    export async function enableUser(username){
      let apiName = 'AdminQueries';
        let path = '/enableUser';
        let myInit = { 
            queryStringParameters: {
              "username": username
            },
            headers: {
              'Content-Type' : 'application/json',
              Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }

        const { ...rest } =  await API.get(apiName, path, myInit);
    return rest;
    }