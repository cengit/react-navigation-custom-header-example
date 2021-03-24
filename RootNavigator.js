import {View, Text} from 'react-native'
import React from 'react'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import TestScreen from './screens/TestScreen';

const RootNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Login: {
      screen: LoginScreen,
      navigationOptions:{
        headerMode:'none' // 页面不需要 header 
      }
    },
    Test: {
      screen: TestScreen,
      // 页面级别的自定义header, 放在navigationOptions, 会覆盖全局的header
      navigationOptions:{
        header:<View><Text>screen custom header</Text></View>
      }
    },
  },
  {
    initialRouteName: 'Test',
    // 整个 stack 级别的自定义header, 放在navigationOptions
    defaultNavigationOptions:{
      header:<View><Text>default custom header</Text></View>
    }
  },
);

export default createAppContainer(RootNavigator);