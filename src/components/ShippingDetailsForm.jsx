/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const ShippingDetailsForm = ({ checkFormValidity }) => {
    const form = useForm();
    const { register, handleSubmit, control, formState: { errors, isValid } } = form;

    useEffect(() => {
        checkFormValidity(isValid)
    }, [isValid])

    const inputClassName = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '

    const labelClassName = 'block text-sm md:text-base font-medium text-gray-900 dark:text-white'

    const inputs = [{
        type: 'text',
        className: inputClassName,
        name: 'firstName',
        message: 'First name is required',
        htmlFor: 'firstName',
        labelText: 'First name',
        labelClassName: labelClassName
    },
    {
        type: 'text',
        className: inputClassName,
        name: 'lastName',
        message: 'Last name is required',
        htmlFor: 'lastName',
        labelText: 'Last name',
        labelClassName: labelClassName
    },
    {
        type: 'email',
        className: inputClassName,
        name: 'emailAddress',
        message: 'Email is required',
        htmlFor: 'emailAddress',
        labelText: 'Email',
        labelClassName: labelClassName
    },
    {
        type: 'text',
        className: inputClassName,
        name: 'cityName',
        message: 'City Name is required',
        htmlFor: 'cityName',
        labelText: 'City',
        labelClassName: labelClassName
    },
    {
        type: 'number',
        className: inputClassName,
        name: 'zipCode',
        message: 'Zip code is required',
        htmlFor: 'zipCode',
        labelText: 'Zip / Costal code',
        labelClassName: labelClassName
    }
    ]

    return (

        <div className='flex flex-col gap-2 mt-2'>
            <h1 className="font-semibold text-sm md:text-lg">Shipping details</h1>
            <form noValidate className="flex flex-col gap-2 md:gap-4 w-full px-2 mx-auto" >
                {inputs && inputs.length > 0 && inputs.map(input => {
                    return <div key={crypto.randomUUID()} className="flex flex-col gap-4 ">
                        <label htmlFor={input.name} className={labelClassName}>{input.labelText}</label>
                        <input
                            type={input.type}
                            className={input.className}
                            {...register(input.name, {
                                required: input.message,
                            })}
                        />
                    </div>
                })}
            </form>
        </div>

    )
}

export default ShippingDetailsForm