import React, { Component } from 'react';
import {Image,View,style,Text,Button,TextInput} from 'react-native';
import PhoneInput from 'react-native-phone-input'

 


export default class Otpscreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

    
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#C0C0C0'}}>
                <Text style={{textAlign:'center',fontSize:20,color:'red' }}>Enter Phone number</Text>
                <TextInput
                ref='mobileNo'
                keyboardType="numeric"
                maxLength={10}
                placeholder='Enter phone number'
                onChangeText={(text) =>this.setState({text})}
                value={this.setState.text}
                style={{ height: 50, borderColor: 'gray', borderWidth: 2 }}
                />
                <View style={{marginTop:30}}>
                    <Button title='GetOTP' color='#00FFFF' onPress={()=>{}}
                    />
                </View>     
            </View>



            // {/* <PhoneInput ref='phone'/> */}
            
        )
    }
}