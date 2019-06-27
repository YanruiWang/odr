/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './App';
import DetailScreen from './source/DetailScreen'
import {name as appName, detail} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(detail, () => DetailScreen);
