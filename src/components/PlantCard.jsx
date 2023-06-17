/* eslint-disable react/prop-types */
import { Rating } from '@mantine/core';
import Heart from '../assets/images/before-like.png';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
import { PlantDetailsContext } from '../contexts/PlantDetailsContext';

function PlantCard({ plant }) {
  const { cart, setCart } = useContext(CartContext)
  const plantInCart = cart.some((item) => item.id === plant.id)
  const { setShowPlantDetails, setPlantId } = useContext(PlantDetailsContext);


  const handleClick = (plantId) => {
    setShowPlantDetails(true);
    setPlantId(plantId)
  };


  return (
    <div className=" flex flex-col gap-3 max-w-[320px] md:max-w-sm after: bg-white pb-2 rounded-2xl hover:shadow-xl hover:brightness-95 transition ease-in-out duration-500 border relative overflow-hidden w-80">
      <img src={plant?.image} alt="imge" className='h-80  object-cover  cursor-pointer' onClick={() => handleClick(plant.id)} />
      <div className='px-3 flex flex-col gap-3'>
        <h2 className="text-xl font-semibold">{plant?.name}</h2>
        <div className='flex gap-2 items-center text-base'>
          <Rating fractions={2} size="lg" value={plant?.rating} readOnly /> {plant?.rating}
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <p>Price: </p>
            <p>$ {plant?.price}</p>
          </div>
          <button
            onClick={() => {
              if (plantInCart) {
                setCart(cart.filter((p) => p.id !== plant.id));
              } else {
                setCart([...cart, plant])
              }
            }
            }
            className={`text-base text-white px-4 py-2 hover:shadow-lg rounded-xl font-medium transition-all ease-in-out duration-500 border ${plantInCart ? 'bg-[#e8a302] font-normal' : 'bg-[#47a358]'
              }`}>
            {plantInCart ? 'Remove from Cart' : 'Add to cart'}
          </button>
        </div>
      </div>
      <img src={Heart} alt="" className='absolute h-6 right-6 top-2 cursor-pointer ' />
    </div>
  );
}

export default PlantCard;
