import { useState, useEffect, useContext } from 'react';
import http_get from '../components/http_get'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppContext from '../context/AppContext'

export default function() {
    const {address,setAddress,ngurl} = useContext(AppContext)
    const [result, setResult] = useState([]);
    const searchVehicle = function(){
        //console.log(address)
        const ur = ngurl + '/resident'
        fetch(ur)
        .then(res=>res.json())
        .then(function(results){
            
            setResult(results.filter(result => result.address === address));

        }).catch(err=>{
            console.log(err)
        })
    }
    //  const searchVehicle = async () => {
       
        
        
        // try {
        //     const response = await http_get.get('./api/');
        //     setResult(response.data.results);
        // }
        // catch (err) {
        //     console.log(err.message)
        // }
    //}
    useEffect(() => {
        searchVehicle();
    }, []);

    return [searchVehicle, result];
};
