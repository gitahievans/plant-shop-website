import { useEffect, useState } from 'react';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [plants, setPlants] = useState([]);
  const plantsCollenctionRef = collection(db, 'plants');

  useEffect(() => {
    getPlants();
  }, []);

  const getPlants = async () => {
    try {
      const response = await getDocs(plantsCollenctionRef);
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Auth />
      </div>
    </>
  );
}

export default App;
