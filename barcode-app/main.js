import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import MainScreen from './screens/MainScreen';
import BarcodeScreen from './screens/BarcodeScreen';

class App extends React.Component {

  render() {
    const routesConfig = {
      main: { screen: MainScreen },
      barcode: { screen: BarcodeScreen }
    };
    const tabNavigatorConfig = {
      activeTintColor: '#e91e63',
      lazy: true,
      navigationOptions: {
        tabBarVisible: false
      }
    };

    const MainNavigator = TabNavigator(routesConfig, tabNavigatorConfig);
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
