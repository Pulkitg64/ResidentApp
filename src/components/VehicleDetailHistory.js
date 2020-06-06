import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Container, Header, Content, CardItem, Body } from 'native-base'

const VehicleDetailHistory = ({ result }) => {
    return (
        // <View>
        //     <Text>Licence Number: {result.vehicle}</Text>
        //     <Text>Name: {result.name}</Text>
        //     <Text>In Time: {result.in_time}</Text>
        //     <Text>Out Time: {result.out_time}</Text>
        //         {/* <Text>Date of Arrival: {result.dob.date}</Text>
        //         <Text>Date of Departure: {result.registered.date}</Text> */}
        // </View>

        <View>
            <Container style={{ marginHorizontal: 10, height: 200,width:300 }}>
                <Header style={{ marginTop: 16, backgroundColor: 'black' }} >
                    <Text style={{ color: 'white', fontWeight: "bold", alignSelf: "center" }}>Entry/Exit</Text>
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>Licence Number: {result.vehicle}</Text>
                                <Text>Name: {result.name}</Text>
                                <Text>In Time: {result.in_time}</Text>
                                <Text>Out Time: {result.out_time}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        </View>
    );
};

export default VehicleDetailHistory;