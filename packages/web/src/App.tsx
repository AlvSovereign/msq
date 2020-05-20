import * as React from 'react';
import { StatusBar } from 'react-native';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { theme, MsqThemeContext } from 'components/src/theme/ThemeContext';
import Auth from 'components/src/screens/Auth/Auth';
import Artist from 'components/src/screens/Artist/Artist';
import firebaseConfig from './utils/firebaseConfig';
import { bootstrapFB } from './utils/loadFBSDK';
import { getFromStorage } from 'components/src/utils/_storageHelper';
import resolvers from 'components/src/graphql/resolvers';
import { AppFrame } from 'components/src/ui';

const cache = new InMemoryCache();
const link = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL });
const authLink = setContext(async (_, operation) => {
  const { headers } = operation;
  let token: string | null = await getFromStorage('token');
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
  resolvers,
});

persistCache({
  cache: client.cache,
  maxSize: false,
  storage: window.localStorage as PersistentStorage<PersistedData<any>>,
});

const Stack = createStackNavigator();

const App = () => {
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    bootstrapFB();
    firebase.initializeApp(firebaseConfig);
  }, []);

  const Main = () => (
    <AppFrame>
      <Stack.Navigator
        initialRouteName={'Artist'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Artist' component={Artist} />
      </Stack.Navigator>
    </AppFrame>
  );

  return (
    <ApolloProvider client={client}>
      <MsqThemeContext.Provider value={theme}>
        <StatusBar barStyle='dark-content' />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'Auth'}
            screenOptions={{
              headerShown: false,
            }}>
            {isSignedIn ? (
              <Stack.Screen name='Main' component={Main} />
            ) : (
              <Stack.Screen name='Auth'>
                {(props) => <Auth {...props} setIsSignedIn={setIsSignedIn} />}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </MsqThemeContext.Provider>
    </ApolloProvider>
  );
};

export default App;
