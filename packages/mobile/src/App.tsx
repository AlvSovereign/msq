import * as React from 'react';
import { StatusBar, Text } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { theme, MsqThemeContext } from 'components/src/theme/ThemeContext';
import Auth from 'components/src/screens/Auth/Auth';
import Welcome from 'components/src/screens/Welcome/Welcome';
import bootstrapApollo from './utils/bootstrapApollo';
import { _renderIcon } from 'components/src/assets/icons';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator
    initialRouteName="Discovery"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        switch (route.name) {
          case 'Discovery':
            return _renderIcon(theme.color.WHITE, 'news');
          default:
            return null;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Discovery" component={Welcome} />
  </Tab.Navigator>
);

const App = () => {
  const [client, setClient] = React.useState<any>(null);
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    bootstrapApollo(setClient);
  }, []);

  if (!client) {
    return <Text>{'loading'}</Text>;
  }

  return (
    <ApolloProvider client={client}>
      <MsqThemeContext.Provider value={theme}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={'Auth'}
            screenOptions={{
              headerShown: false,
            }}>
            {isSignedIn ? (
              <RootStack.Screen name="App" component={AppTabs} />
            ) : (
              <RootStack.Screen name="Auth">
                {props => <Auth {...props} setIsSignedIn={setIsSignedIn} />}
              </RootStack.Screen>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </MsqThemeContext.Provider>
    </ApolloProvider>
  );
};

export default App;
