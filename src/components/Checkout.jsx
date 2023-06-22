import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import ShippingDetailsForm from './ShippingDetailsForm';
import { NavLink } from 'react-router-dom';

function Checkout() {
    const [active, setActive] = useState(0);
    const [isValid, setIsValid] = useState(false);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    const handleFormValidity = (isValid) => {
        console.log(isValid)
        setIsValid(isValid);
    };


    return (
        <div className='max-w-[360px] md:max-w-lg'>
            <h1 className="text-center font-semibold text-lg md:text-2xl">Check out  🛒</h1>
            <Stepper active={active} onStepClick={setActive} >
                <Stepper.Step label="1" description="Shipping details">
                    <ShippingDetailsForm checkFormValidity={handleFormValidity} />
                </Stepper.Step>
                <Stepper.Step label="2" description="Payment details">
                    Step 2 content: Verify email
                </Stepper.Step>
            </Stepper>

            <div className='flex flex-col md:flex-row-reverse items-center gap-4 md:justify-between mt-5'>
                <Group className='flex  items-center justify-end' >
                    <Button className='px-4  rounded-md btn' onClick={prevStep}>Back</Button>
                    <Button className='px-4 bg-green-600 rounded-md text-white btn' onClick={isValid ? nextStep : null}>Next step</Button>
                </Group>
                <NavLink to='/cart' className='px-2 py-2 border rounded-xl self-center hover:bg-green-600 hover:text-white transition-all ease-in-out duration-500'>Back to cart</NavLink>
            </div>

        </div>
    );
}

export default Checkout;