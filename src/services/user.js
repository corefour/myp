import { Auth } from 'aws-amplify';

export async function getCurrentUserJwtPayload(){

    try {
        await Auth.currentAuthenticatedUser().then((res) =>{
            const { signInUserSession } = res;
            return signInUserSession;
        });
    } catch (err) {
        return err;
    }
}
