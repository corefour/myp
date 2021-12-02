import { Auth } from 'aws-amplify';

export async function getCurrentUserJwtPayload(){

    try {
        const { signInUserSession } = await Auth.currentAuthenticatedUser();

        return signInUserSession;
    } catch (err) {
        return err;
    }
}

export async function getCurrentUserRole(){

    try {
        const { idToken } = await getCurrentUserJwtPayload();
        
        const role = idToken.payload["cognito:groups"][0]
        return role;

    } catch(err) {
        return err;
    }
}
