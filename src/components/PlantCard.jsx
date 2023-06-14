import { Rating } from '@mantine/core';
import Heart from '../assets/images/before-like.png';

function PlantCard({ plant }) {
  return (
    <div className=" flex flex-col gap-3 max-w-[320px] md:max-w-sm bg-white pb-2 rounded-2xl hover:shadow-xl transition ease-in-out duration-500 border relative overflow-hidden w-96">
      <img src={plant?.image} alt="imge" className='h-96  object-cover ' />
      <div className='px-3 flex flex-col gap-3'>
        <h2 className="text-2xl font-semibold">{plant?.name}</h2>
        <div className='flex gap-2 items-center text-base'>
          <Rating fractions={2} size="xl" value={plant?.rating} /> {plant?.rating}
        </div>

        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <p>Price: </p>
            <p>${plant?.price}</p>
          </div>
          <button className="text-lg px-6 py-2 hover:shadow-lg hover:text-[#2a2a2a] hover:bg-[#47a358] rounded-xl font-medium transition-all ease-in-out duration-500 border">
            Add to cart
          </button>
        </div>
      </div>

      <img src={Heart} alt="" className='absolute h-6 right-6 top-2 cursor-pointer ' />
    </div>
  );
}

export default PlantCard;
