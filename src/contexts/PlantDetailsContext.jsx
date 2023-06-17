import { createContext, useState } from 'react';

export const PlantDetailsContext = createContext();

export const PlantDetailsContextProvider = ({ children }) => {
    const [showPlantDetails, setShowPlantDetails] = useState(false);
    const [plantId, setPlantId] = useState();
    // console.log(showPlantDetails)
    return <PlantDetailsContext.Provider value={{ showPlantDetails, setShowPlantDetails, plantId, setPlantId }}>
        {children}
    </PlantDetailsContext.Provider>
};