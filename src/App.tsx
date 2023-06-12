import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import NewPlant from './components/NewPlant';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
function App() {
  
  return (
    <div className="max-w-[360px] md:max-w-full  mx-auto flex flex-col h-screen ">
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
