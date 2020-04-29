import { User } from '@react-native-community/google-signin';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import Config from 'react-native-config';

const _handleGoogleAuth = async () => {
  console.log(2222);
  await GoogleSignin.configure({
    offlineAccess: true,
    webClientId: `${Config.OAUTH_GOOGLE_WEBCLIENTID}`,
  });

  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    const { user }: User = await GoogleSignin.signIn();
    console.log('user: ', user);
    const { email, name, photo } = user;

    return { email, name, photo };
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export { _handleGoogleAuth };

// const result = {
//   idToken:
//     'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5ZDk3YjRjYWU5MGJjZDc2YWViMjAwMjZmNmI3NzBjYWMyMjE3ODMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NTI2ODAzMzEyMDItbDdlZjdpZHFvaWxmOW4ybHIyb2xuN2Ixb3M4N2phN2UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NTI2ODAzMzEyMDItdmdqZmMxaDFkdWc5MnRuNmx0Y25hN2hydGk2azQwdHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE2MDI2OTc1Nzg3MTMyMzcxNzUiLCJoZCI6ImFsdmluc292ZXJlaWduLmNvbSIsImVtYWlsIjoid2ViQGFsdmluc292ZXJlaWduLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiM2ZJYVBJbmdLT0JTVV9CaS03SXN5QSIsIm5vbmNlIjoiejd5NFRvMmZGMC1QZTFrSndSUUdUVzNWdnZENFB0ZlVmemVGY0lmVXNPMCIsIm5hbWUiOiJBbHZpbiBTb3ZlcmVpZ24iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2kxTEJncDl3VTRscFlBYldyT1MxaFZJNFFYSm8ySUdNeUE0UXdSPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFsdmluIiwiZmFtaWx5X25hbWUiOiJTb3ZlcmVpZ24iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4NzU3MTkxNiwiZXhwIjoxNTg3NTc1NTE2fQ.A_NLqh7SmoQAawck8OIPhZg55FAX3r9OkcBPnSQIFi2XQdAff-a1nd5xf3OFrv_YJEQov6TK7oQxu3GrpLfJVvi7H4n_ENOEXVrOK99kXW-KN0h1A3YLqnTlG52jXLU2h4Uc_NDTxjcgC9nYkFFzflQvdBjvNjsXJtPhMRru6ji0RUGX-1Qa56lI6nn3e5KuXyUHzZ-kqV8Sj-WgsbiiU8kY9h7rrAGSF1xD6GXr66xpgVpnBL-46-GModCMtbM8rQmzf9VSTFFDQ-sWnE9AEBlpk4A0cvwxJkJkRME2u6cfRgGgDORLpUzW0saN0sUmnwJqUJjMf-UX6ZL2YIyxyA',
//   scopes: [
//     'https://www.googleapis.com/auth/userinfo.email',
//     'https://www.googleapis.com/auth/userinfo.profile',
//     'openid',
//   ],
//   serverAuthCode:
//     '4/ywEPXOaNj1W4evB-7B8pamfOcWwP4NAeipp4XwNNmtrbTKtnKby3M6SFiXFWamzey3zylfHjHZyzObWVQYI68d4',
//   user: {
//     email: 'web@alvinsovereign.com',
//     familyName: 'Sovereign',
//     givenName: 'Alvin',
//     id: '111602697578713237175',
//     name: 'Alvin Sovereign',
//     photo:
//       'https://lh3.googleusercontent.com/a-/AOh14Gi1LBgp9wU4lpYAbWrOS1hVI4QXJo2IGMyA4QwR=s120',
//   },
// };
