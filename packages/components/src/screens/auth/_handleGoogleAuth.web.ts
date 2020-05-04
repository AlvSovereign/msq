import * as firebase from 'firebase/app';
import 'firebase/auth';

const _handleGoogleAuth = async (callback: any) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {
      additionalUserInfo,
      credential,
    } = await firebase.auth().signInWithPopup(provider);

    if (additionalUserInfo && credential) {
      const { email, name, picture }: any = additionalUserInfo.profile;

      return callback({ email, name, avatar: picture });
    }
  } catch (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.error(errorMessage);
  }
};

export { _handleGoogleAuth };
