import { useContext, useState } from 'react';
import { Divider } from '@mantine/core';
import { Rating } from '@mantine/core';
import { SideMenuBtnContext } from '../contexts/mobileSideMenuShow';
import { usePlantsData } from '../hooks/usePlantsData';
import { FilteredPlantsContext } from '../contexts/filteredPlantsContext';

const Filter = () => {
  const categories = [
    {
      spanText: 'Flowering',
    },
    {
      spanText: 'Foliage',
    },
    {
      spanText: 'Low Light',
    },
    {
      spanText: 'Trailing & Climbing',
    },
    {
      spanText: 'Succulent',
    },
    {
      spanText: 'Prickly'
    }
  ];
  const { data } = usePlantsData();
  const plants = data;
  const { setFilteredPlants } = useContext(FilteredPlantsContext)
  // console.log(plants)

  const [value, setValue] = useState(0);
  // we initialize our checkbox state as an array equal to the length of the categories array and set it to false.
  const [checkedCategories, setCheckedCategories] = useState(
    categories.map(() => false)
  );
  // the handleChange function take 'index' as a parameter, representing the index of the checked being changed.

  const handleChange = (index) => {
    const newCheckedCategories = [...checkedCategories];
    newCheckedCategories[index] = !newCheckedCategories[index];
    setCheckedCategories(newCheckedCategories)

    const filtered = plants?.filter(plant => {
      // get categories of the plant
      const plantCategories = plant.category.split(',')

      return plantCategories.some((category) => {
        // get category defined by the clicked checkbox
        return newCheckedCategories.some((isChecked, categoryIndex) => {
          // .some() gooes over each checkbox to find which is selected and sets isChecked for that checkbox to true
          if (isChecked) {
            // we use the index of the selected checkbox(es) to get the name of the category associated with it from the categories array
            return categories[categoryIndex]?.spanText.includes(category)
          }
          return false;
        })
      })
    })
    setFilteredPlants(filtered)
  };


  const sideMenuBtnContext = useContext(SideMenuBtnContext);

  // Accessing the values from the context
  const sideMenuBtnClicked = sideMenuBtnContext?.sideMenuBtnClicked;
  return (
    <>
      <aside
        className={`${sideMenuBtnClicked ? 'block' : 'hidden '
          } md:block  w-72 fixed left-0 z-10 bg-white h-screen `}
        aria-label="Sidebar"
      >
        <div className="flex flex-col gap-6 h-full px-4 py-4 border  overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1>Filter</h1>
          <Divider />
          <ul className="flex flex-col gap-6">
            <li>Categories</li>
            {categories && categories.length > 0
              ? categories.map((c, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={checkedCategories[index]}
                      className="checkbox"
                      onChange={() => handleChange(index)}
                    />
                    <span>{c?.spanText}</span>
                  </li>
                );
              })
              : null}
          </ul>
          <Divider />
          <h1>Price range</h1>
          <div className="flex flex-col gap-4">
            {' '}
            <div className="flex justify-between">
              <input
                type="number"
                name=""
                id=""
                placeholder="Min"
                className="rounded-lg border pl-4 w-28 py-3"
              />
              <input
                type="number"
                name=""
                id=""
                placeholder="Max"
                className="rounded-lg border pl-4 w-28 py-3"
              />
            </div>
            <button className="btn bg-[#47a358] rounded-xl px-4 text-white hover:text-[#47a358]">
              Set Price
            </button>
          </div>
          <Divider />
          <h1>Rating</h1>
          <Rating fractions={2} value={value} onChange={setValue} size="xl" />

          <div
            id="dropdown-cta"
            className="flex flex-col p-2 rounded-lg text-white relative h-56"
          >
            <div className="bg-img rounded-xl"></div>
            <div className="flex flex-col gap-4 no-blur">
              <h1 className="text-xl">GET 30% OFF</h1>
              <p>Share your referral code and get discount</p>
              <button
                type="button"
                className=" rounded-xl bg-[#ffc327] px-8 py-2 self-center text-black btn "
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Filter;
