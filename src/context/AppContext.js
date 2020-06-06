import React ,{useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = function({children}){

    const [address,setAddress] = useState("")
    const [ngurl,setngurl] = useState('http://471ff7065234.ngrok.io') 
    return <AppContext.Provider value={{address ,setAddress}}>
	{children}
	</AppContext.Provider>

}

export default AppContext