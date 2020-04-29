import * as React from 'react';
import { StatusBar } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { theme, MsqThemeContext } from 'components/src/theme/ThemeContext';
import { Signin } from 'components/src/screens/auth/Signin';
import firebaseConfig from './utils/firebaseConfig';
import { initFB, loadFBSDK } from './utils/loadFBSDK';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    initFB();
    loadFBSDK();
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
