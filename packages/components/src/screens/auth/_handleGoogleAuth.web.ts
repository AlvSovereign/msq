import * as firebase from 'firebase/app';
import 'firebase/auth';

const _handleGoogleAuth = async () => {
  try {
  } catch {}
  const provider = new firebase.auth.GoogleAuthProvider();
  const {
    additionalUserInfo,
    credential,
  } = await firebase.auth().signInWithPopup(provider);

  if (additionalUserInfo && credential) {
    const { email, name }: any = additionalUserInfo.profile;
    const { accessToken, idToken }: firebase.auth.OAuthCredential = credential;
  }
};

export { _handleGoogleAuth };
