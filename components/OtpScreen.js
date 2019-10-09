import React, { Component } from 'react';
import { View,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,Platform} from 'react-native';
import PhoneInput from 'react-native-phone-input'



 


export default class Otpscreen extends Component {
    baseUrl = "http://localhost:3001/"
    constructor(props) {
        super(props);
        this.state = {
          phone:''
        };
      }

      

  sendOtp(phone_number){

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => console.log(response.json()))
    // // .then(json => console.log(json))

      var phone = phone_number;
      fetch(this.baseUrl+'getOTp/'+this.state.phone)
      .then(response =>response.json())
      .then(json =>{
        this.props.navigation.navigate("OTPVerfication",{phone:json.to})  
      })
    }

    render(){
        const {text} = this.state
       
        return(
            <View style={styles.container}>
        <Text style={styles.welcome}>
          One more thing please prove your are human{" "}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="input phone number"
          onChangeText={phone => this.setState({ phone: phone })}
        />
               
        <View style={styles.btnContiner}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.sendOtp(this.state.phone)}
          >
            <Text style={styles.btntext}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>



            // {/* <PhoneInput ref='phone'/> */}
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      bottom: 66
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "300"
    },
    input: {
      width: "90%",
      backgroundColor: "skyblue",
      padding: 15,
      marginBottom: 10
    },
    btnContiner: {
      flexDirection: "row",
      justifyContent: "center",
      width: "80%"
    },
    btn: {
      backgroundColor: "orange",
      padding: 15,
      width: "45%",
      marginLeft: 10
    },
    btntext: { fontSize: 16, textAlign: "center" },
    logo: {
      flexDirection: "row"
    }
  });