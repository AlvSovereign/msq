import {
  LoginManager,
  LoginResult,
  AccessToken,
  GraphRequestCallback,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const _handleFacebookAuth = async (callback: any) => {
  try {
    const result: LoginResult = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    const { error, isCancelled } = result;

    if (error) {
      throw new Error(error);
    }

    if (isCancelled) {
      console.log('Login cancelled');
      return;
    }
    const data: AccessToken | null = await AccessToken.getCurrentAccessToken();

    const { accessToken } = data!;

    if (!data) {
      throw new Error('Something went wrong obtaining access token');
    }

    const responseInfoCallback: GraphRequestCallback = (
      error: any | undefined,
      result: any | undefined
    ) => {
      if (result) {
        const { email, name, picture } = result!;

        callback({ email, name, avatar: picture.data.url });
      } else {
        console.log('error: ', error!.toString());
      }
    };

    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken,
        parameters: {
          fields: {
            string: 'email,name,picture,short_name', // what you want to get
          },
        },
      },
      responseInfoCallback
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  } catch (error) {
    console.error(error);
  }
};

export { _handleFacebookAuth };
