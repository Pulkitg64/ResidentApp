import React, { useState,useContext } from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
import MyHeader from '../components/MyHeader'
import Toast from 'react-native-simple-toast'
import { Button } from 'react-native-elements';
import AppContext from '../context/AppContext'

 
const RegisterVehicle = function(props) {
    const {address, setAddress} = useContext(AppContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicle, setVehicle] = useState('');
 
    const SubmitData =async function(){

        await fetch("http://471ff7065234.ngrok.io/resident",{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: name,
              address: address,
              phone: phone,
              vehicle: vehicle,
               
            })

        })
        .then(function(res){
            res.json
        })
        .then(function(data){
            Alert.alert("saved successfully")
            console.log(data)
            props.navigation.navigate('Home')
        }).catch(err=>{
            console.log(err)
        })
                
    }
    return (
        <View>
            <MyHeader navigation={props.navigation} title="Register Vehicle " />
            <Text style={styles.text}>Register Your Vehicle {address}</Text>
            <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={100} >
                <ScrollView>
                    <View style={{ marginTop: 100, flexDirection: 'column' }}>
                        <TextInput
                            placeholder="Name"
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={name}
                            onChangeText={newValue => setName(newValue)}
                        />
                        <TextInput
                            placeholder="Phone"
                            style={styles.input}
                            keyboardType={'numeric'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={phone}
                            onChangeText={newValue => setPhone(newValue)}
                        />
                        <TextInput
                            placeholder="vehicle number"
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={vehicle}
                            onChangeText={newValue => setVehicle(newValue)}
                        />
                        <Button
                            onPress={() => {
                                SubmitData()
                                // props.navigation.navigate('Home')
                                // Toast.show('Request Sent!')
                            }}
                            icon={{
                                name: "send",
                                size: 15,
                                color: "white"
                            }}
                            title="Submit"
                            buttonStyle={{ backgroundColor: '#000', margin: 15 }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: 80,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        borderColor: 'black'
    },
    button: {
        margin: 15
    }
});

export default RegisterVehicle;