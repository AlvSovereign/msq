import {
  LoginManager,
  LoginResult,
  AccessToken,
  GraphRequestCallback,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const _handleFacebookAuth = async () => {
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
        const { email, picture, short_name } = result!;

        // const result =  {"email": "me@alvinsovereign.com", "id": "10158209322902505", "name": "Alvin Sovereign", "picture": {"data": {"height": 50, "is_silhouette": false, "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10158209322902505&height=50&width=50&ext=1590239948&hash=AeTzej5XmhQ2iFYw", "width": 50}}, "short_name": "Alvin"}
        console.log('result: ', result);
        // federatedAuth(result);
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

const infoRequest = {
  config: {
    accessToken:
      'EAADQpfy6pc8BAMJAFT28pHufV6S43zGyEVco2xLII8imQVVPj0c7vhfUq5AeGTc8pWSNR2GjvybDFBZCPnt4ZAYZBZBtabK6MeSvIlJaXexPy1rQPZB6uttyzjNH5KdLEbTZCEl0IaiauWCtbVdhbpLabIdQNbgTNO3CzPuV3Lxc9E56CPYlvvOMABr7G4h40hUFWA4bz8yZBBZCJ7jVcl1Bst10K3iZA5QEZD',
    parameters: { fields: [Object] },
  },
  graphPath: '/me',
};
