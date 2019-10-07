import React, { Component } from 'react';
import { Button, View, Text,Image,Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'k1',
    title: 'Event Organizer',
    text: 'Best Event Organizers',
    image: require('../assets/Images/pic03.jpg'),
    titleStyle: 'styles.title',
    textStyle: 'styles.text',
    imageStyle: 'styles.image',
    backgroundColor: '#FF1744',
  },
  {
    key: 'k2',
    title: 'Weather Reports',
    text: 'Latest Weather Reports',
    image: require('../assets/Images/pic01.jpg'),
    titleStyle: 'styles.title',
    textStyle: 'styles.text',
    imageStyle: 'styles.image',
    backgroundColor: '#D500F9',
  },
  {
    key: 'k3',
    title: 'Technology Informations',
    text: 'Latest Technology Reports',
    image: require('../assets/Images/pic04.jpg'),
    titleStyle: 'styles.title',
    textStyle: 'styles.text',
    imageStyle: 'styles.image',
    backgroundColor: '#2979FF',
  },
  {
    key: 'k4',
    title: 'Flight Bookings',
    text: ' Best Deals on Flights',
    image: require('../assets/Images/pic03.jpg'),
    titleStyle: 'styles.title',
    textStyle: 'styles.text',
    imageStyle: 'styles.image',
    backgroundColor: '#1DE9B6',
  },
  {
    key: 'k5',
    title: 'Restaurant Bookings',
    text: ' 20% off on first Restaurant booking',
    image: require('../assets/Images/pic01.jpg'),
    titleStyle: 'styles.title',
    textStyle: 'styles.text',
    imageStyle: 'styles.image',
    backgroundColor: '#FF3D00',
  },
];



export default class Sliderscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
      show_Main_App: false
 
    };
  }

  on_Done_all_slides = () => {
   this.setState({ show_Main_App: true });
  };
 
  

 

  render() {
    if (this.state.show_Main_App) {
      return (
      <View>{this.props.navigation.navigate('Otp')}</View> 
      )
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.on_Done_all_slides}
          
        />
      );
    }
  }
}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});
