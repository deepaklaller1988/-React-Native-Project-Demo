/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from './components/SplashScreen';
import SliderScreen from './components/SliderScreen';
import OtpScreen from './components/OtpScreen';
import OTPVerfication from './components/OTPVerification';
import Sign from './components/Sign';
type Props = {};

export default class App extends Component<Props>{
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Slider: {screen: SliderScreen},
  Otp:{screen: OtpScreen},
  OTPVerfication: {screen: OTPVerfication},
  sign :{screen:Sign}
},{
  initialRouteName: "Splash",
  headerMode:"none"
});

const AppContainer = createAppContainer(AppNavigator);

