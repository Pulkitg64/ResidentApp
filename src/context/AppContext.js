import React ,{useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = function({children}){

    const [address,setAddress] = useState("")
    const [ngurl,setngurl] = useState('http://52.70.136.68:4001') 
    return <AppContext.Provider value={{address ,setAddress,ngurl}}>
	{children}
	</AppContext.Provider>

}

export default AppContext