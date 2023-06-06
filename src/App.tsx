import { useEffect, useState } from 'react';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import NewPlant from './components/NewPlant';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
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
    <div className="max-w-[360px] md:max-w-full px-2 mx-auto flex flex-col h-screen ">
      <Navbar />
      <main className=" w-full h-full flex mt-[65px] md:mt-[73px]">
        <Filter />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path="/new" element={<NewPlant />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
