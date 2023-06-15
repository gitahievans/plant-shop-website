import { useContext, useState } from 'react';
import { usePlantsData } from '../hooks/usePlantsData';
import PlantCard from './PlantCard';
import { FilteredPlantsContext } from '../contexts/filteredPlantsContext';
import { Loader } from '@mantine/core';


const Shop = () => {
  const [value, setValue] = useState('')
  const { data, isLoading } = usePlantsData();
  const plants = data;
  const { filteredPlants } = useContext(FilteredPlantsContext);


  let searchedPlants = [];
  if (plants && plants.length > 0) {
    searchedPlants = plants.filter(plant => plant.name.toLowerCase().includes(value.toLocaleLowerCase()));
  }

  if (isLoading) {
    return <div className='flex items-center gap-8 md:ml-[40%] ml-[22%] mt-[25%]'>
      <p className='text-2xl'>Planting 🪴</p>
      <Loader variant='bars' size='md' color='green'/>
    </div>
  }

  return (
    <div className="flex flex-col gap-4 pb-3 relative">
      <form className="flex flex-col gap-2 sticky top-[65px] md:top-[75px] z-30">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Lily"
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        {value ? <p className='text-base'>Search results for <span className='text-lg font-semibold'>{value}</span> </p> : null}
      </form>
      <details className="md:hidden dropdown z-30">
        <summary className=" btn w-full">Sort</summary>
        <ul className="flex flex-col gap-2 p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="px-4 py-2 border bg-[#47a358] rounded-lg flex-1">
              Relevance
            </a>
          </li>
          <li>
            <a className="px-4 py-2 border rounded-lg flex-1">Popular</a>
          </li>
          <li>
            <a className="px-4 py-2 border rounded-lg flex-1">Newest</a>
          </li>
          <li>
            <a className="px-4 py-2 border rounded-lg flex-1">Price</a>
          </li>
        </ul>
      </details>
      <div className="hidden md:flex items-center gap-2 ">
        <p className="text-black">Sort</p>
        <div className="text-black flex flex-wrap gap-2">
          <p className="px-4 py-2 border bg-[#47a358] rounded-lg flex-1">
            Relevance
          </p>
          <p className="px-4 cursor-pointer py-2 border rounded-lg flex-1">
            Popular
          </p>
          <p className="px-4 cursor-pointer py-2 border rounded-lg flex-1">
            Newest
          </p>
          <p className="px-4 cursor-pointer py-2 border rounded-lg flex-1">
            Price
          </p>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row gap-6 items-center justify-center flex-wrap">
        {filteredPlants && filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => {
            return <PlantCard key={plant.id} plant={plant} />
          })
        ) : searchedPlants && searchedPlants.length > 0
          ? searchedPlants.map((plant) => {
            return (<PlantCard key={plant.id} plant={plant} />)
          }) :
          plants && plants.length > 0 ? (
            plants.map((plant) => {
              <PlantCard key={plant.id} plant={plant} />
            })
          ) : <p>No plants</p>
        }
      </div>
    </div>
  );
};

export default Shop;
