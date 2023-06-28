import { useContext, useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import ShippingDetailsForm from './ShippingDetailsForm';
import { Link, NavLink } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import { CartContext } from '../contexts/CartContext';

function Checkout() {
    const [active, setActive] = useState(0);
    const [isValid, setIsValid] = useState(false);
    const { cart, setCart, shipping } = useContext(CartContext)

    const cost = cart.map(c => (c.price)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const handleFormValidity = (isValid) => {
        setIsValid(isValid);
    };


    return (
        <div className='max-w-[360px] md:max-w-xl mx-auto md:border md:p-4 rounded-xl'>
            <div className='flex items-center justify-between'>
                {active !== 2 && <NavLink to='/cart' className=''>Back to cart</NavLink>}
                <h1 className="text-center font-semibold md:text-xl">Check out  🛒</h1>
            </div>
            <div className='flex flex-col mt-2 gap-4'>
                <Stepper size='sm' color="green" radius='lg' active={active} onStepClick={setActive} >
                    <Stepper.Step label="1" description="Shipping details">
                        <ShippingDetailsForm checkFormValidity={handleFormValidity} />
                    </Stepper.Step>
                    <Stepper.Step label="2" description="Order summary">
                        <OrderSummary />
                    </Stepper.Step>
                </Stepper>
                {active === 2 ?
                    <div className=' flex flex-col gap-3 items-center mt-28 text-center'>
                        <h1 className='text-lg font-medium '>Thank you for your purchase, esteemed customer.</h1>
                        <h2>Spread the good word!</h2>
                        <hr />
                        <Link to='/' onClick={() => setCart([])} className='px-4 py-4 rounded-md btn-info md:w-1/3 text-white font-semibold flex items-center justify-center'>Back to shopping</Link>
                    </div>
                    : null}
                {active !== 2 ? <Group className='flex items-center justify-end mt-4' >
                    {active !== 0 ? <Button className='px-4 rounded-md btn' onClick={prevStep}>Back</Button> : null}
                    <Button className='px-4 bg-green-600 rounded-md text-white btn' onClick={nextStep}>{active === 1 ? `Pay - $ ${cost + shipping}` : 'Next step'}</Button>
                </Group> : null}
            </div>
        </div>
    );
}

export default Checkout;