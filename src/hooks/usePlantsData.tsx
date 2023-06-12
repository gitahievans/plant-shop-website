import { useQuery } from '@tanstack/react-query';
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore';

const plantsCollenctionRef = collection(db, 'plants');

const getPlants = async () => {
    const response = await getDocs(plantsCollenctionRef);
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
};


export const usePlantsData = () => {
    return useQuery({
        queryKey: ['plants'],
        queryFn: getPlants,
    })
};

