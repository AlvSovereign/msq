import * as React from 'react';
import { StatusBar, Text } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { theme, MsqThemeContext } from 'components/src/theme/ThemeContext';
import Auth from 'components/src/screens/Auth/Auth';
import Artist from 'components/src/screens/Artist/Artist';
import Welcome from 'components/src/screens/Welcome/Welcome';
import bootstrapApollo from './utils/bootstrapApollo';
import { _renderIcon } from 'components/src/assets/icons';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const { BLUE_100, BLUE_300, BLUE_500, WHITE } = theme.color;
  return (
    <Tab.Navigator
      initialRouteName="Discovery"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Discovery':
              return _renderIcon({
                fill: focused ? WHITE : BLUE_300,
                icon: 'news',
              });
            case 'Feed':
              return _renderIcon({
                fill: focused ? WHITE : BLUE_300,
                icon: 'library',
              });
            case 'Search':
              return _renderIcon({
                fill: focused ? WHITE : BLUE_300,
                icon: 'search',
              });
            default:
              return null;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: WHITE,
        inactiveTintColor: BLUE_100,
        activeBackgroundColor: BLUE_500,
        inactiveBackgroundColor: BLUE_500,
        allowFontScaling: true,
        tabStyle: {},
      }}>
      <Tab.Screen name="Discovery" component={Artist} />
      <Tab.Screen name="Search" component={Welcome} />
      <Tab.Screen name="Feed" component={Welcome} />
    </Tab.Navigator>
  );
};

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
