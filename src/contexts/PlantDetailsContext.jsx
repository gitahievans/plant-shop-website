import { createContext, useState } from 'react';

export const PlantDetailsContext = createContext();

export const PlantDetailsContextProvider = ({ children }) => {
    const [plantId, setPlantId] = useState();
    return <PlantDetailsContext.Provider value={{ plantId, setPlantId }}>
        {children}
    </PlantDetailsContext.Provider>
};