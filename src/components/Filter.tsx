import React, { useState } from 'react';
import { Divider } from '@mantine/core';
import { Rating } from '@mantine/core';
import ctaBg from '../assets/images/cta-bg.jpg';
const Filter = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="fixed top-20 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col gap-6 h-full px-4 py-4 overflow-y-auto border dark:bg-gray-800">
          <h1>Filter</h1>
          <Divider />
          <ul className="flex flex-col gap-6">
            <li>Categories</li>
            <li className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={checked}
                className={`checkbox checkbox-success`}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>Gardening</span>
            </li>{' '}
            <li className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={checked}
                className={`checkbox checkbox-success`}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>Seeds</span>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={checked}
                className={`checkbox checkbox-success`}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>Bulbs</span>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={checked}
                className={`checkbox checkbox-success`}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>Plants</span>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={checked}
                className={`checkbox checkbox-success`}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>Flowers</span>
            </li>
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
                placeholder="Min"
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
