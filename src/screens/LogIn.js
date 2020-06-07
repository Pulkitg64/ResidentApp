import React, { useState, useEffect,useContext } from "react";
import { StyleSheet, TextInput, View, Text,ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import { Notifications } from "expo";
import AppContext from '../context/AppContext'
const LogIn = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const {address, setAddress,ngurl} = useContext(AppContext);
 // const [name, setName] = useState("");
  const [isLoading,setLoading] = useState(true)
  const [userToken,setUserToken] = useState(null)



  
  return (
    <>
      <View>
        <Text style={{ fontSize: 25, marginTop: 100, marginHorizontal: 15,textAlign:'center' }}>
          Welcome Resident,
        </Text>
        <Text style={{ fontSize: 15, marginTop: 5, marginHorizontal: 15,textAlign:'center' }}>
          Login to continue
        </Text>
      </View>
      <View style={{ marginTop: 110 }}>
        <TextInput
          placeholder=" Flat Number"
          placeholderTextColor='grey'
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={number}
          onChangeText={newValue => setNumber(newValue)}
        />
        {/* <TextInput
          placeholder=" Password"
          placeholderTextColor='grey'
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={number}
          onChangeText={newValue => setNumber(newValue)}
        /> */}
        {/* <TextInput
          placeholder="Name"
          placeholderTextColor='grey'
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={newValue => setName(newValue)}
        /> */}
      </View>
      <Button
        onPress={async function() {
          setAddress(number)
          let token = await Notifications.getExpoPushTokenAsync();
          console.log(token)
          const ur = ngurl + '/expo/token'
          // POST the token to your backend server from where you can retrieve it to send push notifications.
          fetch(ur, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token,
              // name,
              address: number
            })
          });

          Notifications.addListener(notification => {
            console.log("llllllllllllllllulllllllllllll", notification.data);
            navigation.navigate('Notify',notification.data)
          });
          
          navigation.navigate("Home");
        }}
        title="LogIn"
        buttonStyle={{
          width: 120,
          alignSelf: "center",
          alignContent: "stretch",
          marginTop: 50,
          marginHorizontal: 15,
          backgroundColor: "#000",
          borderRadius: 10
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 2,
    marginTop: 10,
    marginHorizontal: 15,
    fontSize: 21,
    backgroundColor: "#fff"
  }
});

export default LogIn;
