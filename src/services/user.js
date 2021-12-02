import { Auth } from 'aws-amplify';

export async function getCurrentUserJwtPayload(){

    try {
        const { signInUserSession } = await Auth.currentAuthenticatedUser();

        return signInUserSession;
    } catch (err) {
        return err;
    }
}
