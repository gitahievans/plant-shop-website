import { Rating } from '@mantine/core';
import Heart from '../assets/icons/heart.png';

function PlantCard({ plant }) {
  type description = string;
  const cutDescription = (description: description) => {
    const words = description.split(' ');
    const limitedWords = words.slice(0, 6);
    const limitedSentence = limitedWords.join(' ');
    return limitedSentence;
  }

  return (
    <div className=" flex flex-col gap-3 max-w-sm bg-white px-4 py-2 rounded-2xl hover:shadow-xl transition ease-in-out duration-500 border relative overflow-hidden w-96">
      <img src={plant?.image} alt="imge" className='h-96 w-ful  object-cover' />
      <div className='flex flex-col gap-3'>
        <h2 className="text-2xl font-semibold">{plant?.name}</h2>
        <Rating fractions={2} size="xl" value={plant?.rating} />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p>Price: </p>
            <p>${plant?.price}</p>
          </div>
          <button className="text-lg px-6 py-2 hover:shadow-lg hover:text-[#2a2a2a] hover:bg-[#47a358] rounded-xl font-medium transition-all ease-in-out duration-500 border">
            Add to cart
          </button>
        </div>
      </div>

      <img src={Heart} alt="" className='absolute h-6 right-6' />
    </div>
  );
}

export default PlantCard;