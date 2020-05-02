import * as React from 'react';
import { StatusBar, Text } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme, MsqThemeContext } from 'components/src/theme/ThemeContext';
import Auth from 'components/src/screens/Auth/Auth';
import Welcome from 'components/src/screens/Welcome/Welcome';
import bootstrapApollo from './utils/bootstrapApollo';
const Stack = createStackNavigator();
const App = () => {
    const [client, setClient] = React.useState(null);
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    React.useEffect(() => {
        bootstrapApollo(setClient);
    }, []);
    if (!client) {
        return <Text>{'loading'}</Text>;
    }
    return (<ApolloProvider client={client}>
      <MsqThemeContext.Provider value={theme}>
        <StatusBar barStyle="dark-content"/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Auth'} screenOptions={{
        headerShown: false,
    }}>
            {isSignedIn ? (<Stack.Screen name="Welcome" component={Welcome}/>) : (<Stack.Screen name="Auth">
                {props => <Auth {...props} setIsSignedIn={setIsSignedIn}/>}
              </Stack.Screen>)}
          </Stack.Navigator>
        </NavigationContainer>
      </MsqThemeContext.Provider>
    </ApolloProvider>);
};
export default App;
//# sourceMappingURL=App.jsx.map