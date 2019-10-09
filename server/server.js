const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const speakeasy = require('speakeasy')
const client = require('twilio')("ACbe0b388ca58323a7ba19e7083b7b2b2e", "cf573d91c507fec56b99fea2e40d7bdf")
const cors = require('cors')

// const accountSid = '';
// const authToken = '';



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())


app.get('/getOTp/:number',(req,res)=>{

const mobile_number = '+91' + req.params.number;
client.verify.services('VAa9dab845f972a7744b071dfa5c4b51c7')
             .verifications
             .create({to: mobile_number, channel: 'sms'})
             .then(verification => 
                {
                    // c(verification.status)
                    return res.send(verification)
                });
     
})


app.get('/verify/:phone/:otp',(req,res)=>{
   const phone_Number =  req.params.phone
   const OTP = req.params.otp
// console.log(phone_Number)
// console.log(OTP)

     client.verify.services('VAa9dab845f972a7744b071dfa5c4b51c7')
      .verificationChecks
      .create({to: phone_Number, code: OTP})
      .then(verification_check => {
          
        return res.send(verification_check)
    
    });




})










// app.post('/totp-secret',(req,res)=>{
//     var secret = speakeasy.generateSecret({length:20})
//     res.send({"secret":secret.base32})
// })

// app.post('/totp-generate',(req,res)=>{
//     res.send({
//         "token":speakeasy.totp({
//             secret:req.body.base32,
//             encoding:"base32"
//         }),
//     "remaining":(30-Math.floor((new Date().getTime() / 1000.0 % 30)))
//     })

    // app.post('/createOTp',(req,res)=>{
    //     var data = client.verify.services('VAa9dab845f972a7744b071dfa5c4b51c7').verifications.create({
    //         to:req.body.phone,
    //         channel:'sms'        
    //     }).then(verification =>{verification.status})
    // })
//})



app.listen(3001,()=>{
    console.log('node server invoked')
})