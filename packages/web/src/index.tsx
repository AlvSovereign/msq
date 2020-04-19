import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import App from './App';

AppRegistry.registerComponent('myprojectname', () => App);
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
});
