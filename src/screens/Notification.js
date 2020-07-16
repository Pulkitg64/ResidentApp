import React,{useContext} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Permissions, Notifications } from 'expo';
import { Button,Header } from 'react-native-elements';
import AppContext from '../context/AppContext'

const NotificationScreen = function({navigation}){

    console.log("NOTIFICATION SCREEN")
    const {address, setAddress,ngurl} = useContext(AppContext);
    return(

        <View>
            <Header
                centerComponent={{
                    text: 'New Visitor',
                    style: { fontSize: 25, color: "#fff", fontWeight: "bold", alignContent: "center" }
                }}
                backgroundColor="black"
                statusBarProps={{ barStyle: "light-content" }}
            />
            <Text style={styles.text}> You might have a new Visitor</Text>
            <View style ={{marginHorizontal: 20,marginVertical: 20}}>
                <Text>Name: {navigation.state.params.name}</Text>
                <Text>Mobile Number: {navigation.state.params.mobile}</Text>
                <Text>Vehicle Number: {navigation.state.params.vehicle}</Text>
            </View>

            <Text style = {{marginTop: 30,alignSelf:'center'}}>Please accept or reject entry</Text>
            
            <Button
                onPress = { async function(){
                    const ur = ngurl + '/notification'
                    await fetch(ur,{
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: navigation.state.params.name,
                            phone: navigation.state.params.mobile,
                            address: address,
                            vehicle: navigation.state.params.vehicle,
                            status: 'Accept'
                        })

                    })
                    .then(function(res){
                        res.json
                    })
                    .then(function(data){
                        //Alert.alert("saved successfully")
                        console.log(data)
                        navigation.navigate('Home')
                    }).catch(err=>{
                        console.log(err)
                    })
                }}
                icon={{
                    name: "send",
                    size: 15,
                    color: "white"
                }}
                title="Accept"
                buttonStyle={{ backgroundColor: '#000', margin: 15 }}
            />
            <Button
                onPress = { async function(){
                    const ur = ngurl + '/notification'
                    await fetch(ur,{
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: navigation.state.params.name,
                            phone: navigation.state.params.mobile,
                            address: address,
                            vehicle: navigation.state.params.vehicle,
                            status: 'Reject'
                        })

                    })
                    .then(function(res){
                        res.json
                    })
                    .then(function(data){
                        //Alert.alert("saved successfully")
                        console.log(data)
                        navigation.navigate('Home')
                    }).catch(err=>{
                        console.log(err)
                    })
                }}
                icon={{
                    name: "send",
                    size: 15,
                    color: "white"
                }}
                title="Reject"
                buttonStyle={{ backgroundColor: '#000', margin: 15 }}
            />
        </View>
    )
}

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

export default NotificationScreen
