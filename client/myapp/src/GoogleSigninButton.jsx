import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";

function GoogleSigninButton(){
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                // console.log(credentialResponse);
                const credentialResponseDecoded=jwtDecode(credentialResponse.credential);
                console.log(credentialResponseDecoded);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
} 
export default GoogleSigninButton;