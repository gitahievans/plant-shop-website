import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import img from '../assets/images/left-img.webp'

type FormValues = {
  plantName: string,
  description: string,
  category: string,
  price: number,
  image: string
}

const NewPlant = () => {
  const plantsCollenctionRef = collection(db, 'plants');

  const form = useForm<FormValues>();
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState


  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const formData = {
      name: data.plantName,
      category: data.category,
      description: data.description,
      price: data.price,
      image: data.image,
    }
    await addDoc(plantsCollenctionRef, formData)
  };


  return (
    <div className="flex h-fit mt-10">
      <div className="md:w-1/2 flex items-center justify-center"> 
      <img src={img} alt="" className='rounded-xl hidden md:block h-[800px] ' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4 w-full md:w-1/3 px-2 mx-auto md:mt-20" >
        <h1 className="text-center font-semibold text-lg">Add a New Plant</h1>
        <div className="flex flex-col gap-4 ">
          <label htmlFor="plantName" className="block text-sm md:text-base font-medium text-gray-900 dark:text-white">Plant Name</label>
          <input
            type="text"
            id="plantName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("plantName", {
              required: "Plant name is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="description" className="block text-sm md:text-base font-medium text-gray-900 dark:text-white">Description</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("description", {
              required: "Plant descriptoion is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="image" className="block text-sm md:text-base font-medium text-gray-900 dark:text-white">Image Url</label>
          <input
            type="url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("image", {
              required: "Image-url is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="category" className="block text-sm md:text-base font-medium text-gray-900 dark:text-white">Category</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("category", {
              required: "Plant category is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="price" className="block text-sm md:text-base font-medium text-gray-900 dark:text-white">Price</label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("price", {
              required: "Plant price is required",
            })}
          />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn">Submit</button>
      </form >
      <DevTool control={control} />
    </div>
  )
};

export default NewPlant;
