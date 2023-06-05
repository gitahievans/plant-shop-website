import { useEffect, useState } from 'react';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';

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
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[320px] md:max-w-full px-2 mx-auto flex flex-col gap-8 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
