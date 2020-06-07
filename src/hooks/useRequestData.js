import { useState, useEffect ,useContext} from 'react';
import http_get from '../components/http_get'
import AppContext from '../context/AppContext'

export default function() {
    const {address,setAddress,ngurl} = useContext(AppContext)
    const [result, setResult] = useState([]);
   // console.log(ngurl)
    const searchVehicle = function(){
        const ur = ngurl + '/guest'
        fetch(ur)
        .then(function(res){return res.json()})
        .then(function(results){
            setResult(results.filter(result => result.address === address));
        }).catch(err=>{
            console.log(err)
        })
    }
    
    useEffect(() => {
        searchVehicle();
    }, []);

    return [searchVehicle, result];
};
