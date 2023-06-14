import { createContext, useState } from "react";
import { usePlantsData } from "../hooks/usePlantsData";

export const FilteredPlantsContext = createContext();

export const FilteredPlantsContextProvider = ({ children }) => {
    const { data } = usePlantsData();
    const plants = data;
    const [filteredPlants, setFilteredPlants] = useState(plants);

    return <FilteredPlantsContext.Provider value={{ filteredPlants, setFilteredPlants }}>
        {children}
    </FilteredPlantsContext.Provider>
}