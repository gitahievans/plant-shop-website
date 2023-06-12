import image1 from '../assets/images/faux-watermelon-peperomia.jpg'
import leftImg from '../assets/images/left-img.webp'
const FormImage = () => {

    return (
        <div className='hidden lg:flex w-1/2 '>
            <img src={leftImg} alt="" className=' w-full object-contain ' />
        </div>
    )
}

export default FormImage