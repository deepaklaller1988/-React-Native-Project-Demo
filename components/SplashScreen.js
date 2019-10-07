import React, { Component } from 'react';
import {Image,View,style} from 'react-native';


export default class Splashscreen extends Component {

componentDidMount(){
  setTimeout(() =>{
    this.props.navigation.navigate('Slider')
  },5000)
}


  render() {
    return (
     <View>
       <Image source={require('../assets/Images/Taco_Party_0.gif')} 
       style={{width:'100%', height:'100%'}}
       />
     </View>
    )
  }
}