import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import VehicleDetailHistory from './VehicleDetailHistory';
import useVehicleHistory from '../hooks/useVehicleHistory';

const VehicleHistory = function() {
    const [searchVehicle, result] = useVehicleHistory();
    return (
        <FlatList
            data={result}
            keyExtractor={(result) => result._id.toString()}
            renderItem={({ item }) => {
                return <VehicleDetailHistory result={item} />
            }}
        />
    );
};

const style = StyleSheet.create({

});

export default VehicleHistory;