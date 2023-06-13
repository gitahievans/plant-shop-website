import { createContext, useState } from "react";
import { usePlantsData } from "../hooks/usePlantsData";

type Plant = {
    id: string,
    plantName: string,
    description: string,
    category: string,
    price: number,
    image: string,
    rating: number
}

export const FilteredPlantsContext = createContext<{
    filteredPlants: Plant[];
    setFilteredPlants: React.Dispatch<React.SetStateAction<Plant[]>>;
}>({ filteredPlants: [], setFilteredPlants: () => { } });

export const FilteredPlantsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { data } = usePlantsData();
    const plants = data;
    const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plants);

    return <FilteredPlantsContext.Provider value={{ filteredPlants, setFilteredPlants }}>
        {children}
    </FilteredPlantsContext.Provider>
}