import image1 from '../assets/images/faux-watermelon-peperomia.jpg'
import leftImg from '../assets/images/left-img.webp'
const FormImage = () => {

    return (
        <div className='w-1/2 flex'>
            <img src={leftImg} alt="" className='hover:brightness-50 w-1/2 ' />
            <div className='w-1/2 relative '>
               
                <h1 className='font-semibold mt-[70%] text-4xl text-center break-word'>PLANTS MAKE EVERYTHING BETTER</h1>
                <img src={image1} alt="image" className='absolute h-80 bottom-0 right-0' />
            </div>

        </div>
    )
}

export default FormImage