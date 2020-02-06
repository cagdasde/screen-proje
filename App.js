import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from './screens/FirstScreen';
import LanguageScreen from './screens/LanguageScreen';
import CategoryScreen from './screens/CategoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import ActionScreen from './screens/ActionScreen';
import IndexScreen from './screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    First: FirstScreen,
    Action: ActionScreen,
    Category: CategoryScreen,
    Language: LanguageScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: '',
    },
  },
);

const App = createAppContainer(navigator);
export default () => {
  return <App />;
};
