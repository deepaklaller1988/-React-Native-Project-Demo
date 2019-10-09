import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput
} from "react-native";

export default class OTPVerification extends Component { 
   baseUrl = "http://localhost:3001/";
    constructor(props) {
        super(props);
        this.state = {
          otp:''
        };
      }

      verifyOtp(code){
        // console.log(code)
        const name = this.props.navigation.getParam('phone');
        // console.log(name)
       fetch(this.baseUrl+'verify/'+name+'/'+code)
        .then(response =>response.json())
        .then(json =>{
          if(json.status === "pending"){
            alert('Please Enter correct OTP')
          }
          else if(json.status ==="approved"){
            this.props.navigation.navigate("sign")  
          }
          
        })
          // this.props.navigation.navigate("sign")    
    

       };



      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>input OTP here</Text>
            <TextInput
              style={styles.input}
              placeholder="_ _ _ _ _"
              keyboardType={"numeric"}
              onChangeText={otp => this.setState({ otp: otp })}
            />
            <View style={styles.btnContiner}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.verifyOtp(this.state.otp)}
              >
                <Text style={styles.btntext}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
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