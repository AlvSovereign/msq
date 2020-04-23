import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { theme, MsqThemeContext } from 'components/src/theme/ThemeContext';
import { Signin } from 'components/src/screens/auth/Signin';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  // OPTIONAL
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

const App = () => {
  React.useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    <MsqThemeContext.Provider value={theme}>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'SignIn'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='SignIn' component={Signin} />
        </Stack.Navigator>
      </NavigationContainer>
    </MsqThemeContext.Provider>
  );
};

export default App;
