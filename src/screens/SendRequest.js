import React, { useState,useContext } from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView,Alert } from "react-native";
import MyHeader from '../components/MyHeader'
import Toast from 'react-native-simple-toast'
import { Button } from 'react-native-elements';
import AppContext from '../context/AppContext'
const SendRequest = props => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [number, setNumber] = useState('');
    const {address,ngurl} = useContext(AppContext)

    const SubmitData =function(){
        const ur = ngurl + '/guest'
        fetch(ur,{
            method: 'POST',
            headers: {
              //Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: name,
              phone: phone,
              vehicle: number,
              address: address,
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
            <MyHeader navigation={props.navigation} title="Send Request" />
            <Text style={styles.text}>Book a parking place by just sending a request.</Text>
            <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={100} >
                <ScrollView>
                    <View style={{  flexDirection: 'column' }}>
                        <TextInput
                            placeholder="Guest Name"
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
                            placeholder="Licence Number"
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={number}
                            onChangeText={newValue => setNumber(newValue)}
                        />
                        <Button
                            onPress={() => {
                                SubmitData()
                               
                               // Toast.show('Request Sent!')
                            }}
                            icon={{
                                name: "send",
                                size: 15,
                                color: "white"
                            }}
                            title="Send"
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

export default SendRequest;