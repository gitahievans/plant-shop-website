/* eslint-disable react/prop-types */
import { Rating } from '@mantine/core';
import Heart from '../assets/images/before-like.png';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
import cartImage from '../assets/icons/shopping-cart.svg'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useState } from 'react';
import { usePlantsData } from '../hooks/usePlantsData';
import { PlantDetailsContext } from '../contexts/PlantDetailsContext';

function PlantCard({ plant }) {
  const { cart, setCart } = useContext(CartContext)
  const plantInCart = cart.some((item) => item.id === plant.id)
  const { setPlantId, plantId } = useContext(PlantDetailsContext);
  const [opened, { open, close }] = useDisclosure(false);
  const [rating, setRating] = useState();
  const { data } = usePlantsData();
  const plants = data;
  const modalPlant = plants.filter((plant) => plant.id === plantId)[0];
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleClick = (plantId) => {
    open();
    setPlantId(plantId)
  };

  const maxDescriptionLength = 100;

  const displayDescription = showFullDescription
    ? plant.description
    : plant.description.slice(0, maxDescriptionLength) + '...';

  return (
    <>
      <div
        className=" flex flex-col gap-3 max-w-[320px] md:max-w-sm after: bg-white pb-2 rounded-2xl hover:shadow-xl hover:brightness-95 transition ease-in-out duration-500 border relative overflow-hidden w-80">
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
              {plantInCart ? 'Remove from Cart' :
                <div className="add-cart flex items-center gap-2 ">
                  <p>Add to Cart</p>
                  {/* <img src={cartImage} alt="cart" className="h-8" /> */}
                </div>}
            </button>
          </div>
        </div>
        <img src={Heart} alt="" className='absolute h-6 right-6 top-2 cursor-pointer ' />
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title={modalPlant?.name}
        centered
        overlayProps={{
          opacity: 0.75,
        }}
      >
        <div className='bg-white flex flex-col px-2 py-10 gap-4 md:gap-8'>
          <img src={modalPlant?.image} alt="image" className='h-80 w-full object-cover rounded-xl ' />
          <div className='flex flex-col gap-2'>
            <h2 className="md:text-xl lg:text-2xl font-semibold">{modalPlant?.name}</h2>
            <p className='text-gray-500'>{displayDescription} {showFullDescription ? (
              <button
                onClick={() => setShowFullDescription(false)}
                className='text-blue-500 hover:underline font-medium'>
                Less
              </button>
            ) : (
              <button
                onClick={() => setShowFullDescription(true)}
                className='text-blue-500 hover:underline font-medium'>
                Read More
              </button>
            )}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-lg font-semibold'>Rate this plant</h1>
            <Rating size='lg' fractions={2} value={rating} onChange={setRating} />
          </div>
          <div className='flex flex-wrap items-center md:w-3/5 md:justify-between gap-8 md:gap-2'>
            <img src={Heart} alt="like" className='w-8 cursor-pointer' />
            <button
              onClick={() => {
                if (plantInCart) {
                  setCart(cart.filter((p) => p.id !== modalPlant.id));
                } else {
                  setCart([...cart, plant])
                }
              }
              }
              className={`text-base text-white px-4 py-2 hover:shadow-lg rounded-xl font-normal transition-all ease-in-out duration-500 border break-word ${plantInCart ? 'bg-[#988c00]' : 'bg-[#47a358]'
                }`}>
              {plantInCart ? 'Remove from Cart' : <p>Add to cart - <span className='font-medium'>${modalPlant?.price}</span></p>}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PlantCard;
