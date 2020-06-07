import React ,{useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = function({children}){

    const [address,setAddress] = useState("")
    const [ngurl,setngurl] = useState('http://d99ea0edfe41.ngrok.io') 
    return <AppContext.Provider value={{address ,setAddress,ngurl}}>
	{children}
	</AppContext.Provider>

}

export default AppContext