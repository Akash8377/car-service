import {useState, createContext} from 'react';

const ServiceContext = createContext();

const ServiceContextProvider = ({children}) =>{
    const [carInfo, setCarInfo] = useState({manufacturer: '', model: '', fuelType: ''});
    return <ServiceContext.Provider value={{carInfo, setCarInfo}}>
        {children}
    </ServiceContext.Provider>
}

export { ServiceContext, ServiceContextProvider};