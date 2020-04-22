import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme, MsqThemeContext } from 'components/src/theme/ThemeContext';
import { Signin } from 'components/src/screens/auth/Signin';
const Stack = createStackNavigator();
const App = () => {
    return (<MsqThemeContext.Provider value={theme}>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'SignIn'} screenOptions={{
        headerShown: false,
    }}>
          <Stack.Screen name="SignIn" component={Signin}/>
        </Stack.Navigator>
      </NavigationContainer>
    </MsqThemeContext.Provider>);
};
export default App;
//# sourceMappingURL=App.jsx.map