import { useContext, useState } from 'react';
import { PlantDetailsContext } from '../contexts/PlantDetailsContext';
import { usePlantsData } from '../hooks/usePlantsData';
import closeIcon from '../assets/icons/close_FILL0_wght400_GRAD0_opsz48.svg'
import { Rating } from '@mantine/core';
import Heart from '../assets/images/before-like.png';
import { CartContext } from '../contexts/CartContext';

const PlantDetails = () => {
    const { setShowPlantDetails, plantId } = useContext(PlantDetailsContext);
    const [rating, setRating] = useState();
    const { cart, setCart } = useContext(CartContext)
    const { data } = usePlantsData();
    const plants = data;
    const plant = plants.filter((plant) => plant.id === plantId)[0];
    const plantInCart = cart.some((item) => item.id === plant.id)
    const [showFullDescription, setShowFullDescription] = useState(false);
    const maxDescriptionLength = 100;

    const displayDescription = showFullDescription
        ? plant.description
        : plant.description.slice(0, maxDescriptionLength) + '...';

    return (
        <div className='bg-white h-screen hidden md:flex flex-col px-2 py-10 gap-6 border-l w-1/2 '>
            <img src={plant?.image} alt="image" className='h-80 w-full object-cover rounded-xl ' />
            <div className='flex flex-col gap-2'>
                <h2 className="md:text-xl lg:text-2xl font-semibold">{plant?.name}</h2>
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
            <div className='flex flex-wrap items-center w-4/5 justify-between gap-2'>
                <img src={Heart} alt="like" className='w-8 cursor-pointer' />
                <button
                    onClick={() => {
                        if (plantInCart) {
                            setCart(cart.filter((p) => p.id !== plant.id));
                        } else {
                            setCart([...cart, plant])
                        }
                    }
                    }
                    className={`text-base text-white px-4 py-2 hover:shadow-lg rounded-xl font-normal transition-all ease-in-out duration-500 border break-word ${plantInCart ? 'bg-[#988c00]' : 'bg-[#47a358]'
                        }`}>
                    {plantInCart ? 'Remove from Cart' : <p>Add to cart - <span className='font-medium'>${plant.price}</span></p>}
                </button>
            </div>
            <img src={closeIcon} alt="close" className='bg-slate-50 h-8 absolute top-2 right-0 cursor-pointer' onClick={() => setShowPlantDetails(false)} />
        </div>
    );
};

export default PlantDetails;