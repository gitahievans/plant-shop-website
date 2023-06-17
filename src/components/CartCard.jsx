/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from 'react'
import { NumberInput, Group, ActionIcon, rem } from '@mantine/core';
import { CartContext } from '../contexts/CartContext';

const CartCard = ({ cartItem }) => {
    const [value, setValue] = useState(0);
    const { setCart, cart } = useContext(CartContext);


    const handleIncrement = () => {
        setValue((prevValue) => prevValue + 1);
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) => {
                if (item.id === cartItem.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return updatedCart;
        });
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue((prevValue) => prevValue - 1);
            setCart((prevCart) => {
                const updatedCart = prevCart.map((item) => {
                    if (item.id === cartItem.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
                return updatedCart;
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-between md:flex-row gap-3 pb-4 max-w-[360px] md:max-w-6xl bg-white hover:bg-slate-50 md:p-8 rounded-2xl hover:shadow-2xl transition ease-in-out duration-500 border relative">
            <img src={cartItem?.image} alt="imge" className='md:w-1/2 w-full h-72 object-cover rounded-xl' />
            <div className='w-full md:w-1/3 px-3 flex flex-col gap-3'>
                <div className='flex flex-col flex-wrap gap-2'>
                    <h2 className="md:text-lg font-semibold">{cartItem?.name}</h2>
                    <div className="flex items-center gap-2">
                        <p>Price: </p>
                        <p className='text-green-900 font-semibold'>${cartItem.price * cartItem.quantity}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-10'>
                    <Group spacing={20}>
                        <ActionIcon size='xl' variant='default' onClick={handleDecrement}>
                            –
                        </ActionIcon>
                        <NumberInput
                            hideControls
                            value={cartItem.quantity}
                            styles={{ input: { width: rem(54), textAlign: 'center' } }}
                        />
                        <ActionIcon size='xl' variant="default" onClick={handleIncrement}>
                            +
                        </ActionIcon>
                    </Group>
                    <button
                        onClick={() => {
                            setCart(cart.filter((p) => p.id !== cartItem.id));
                        }}
                        className="text-base text-white hover:bg-green-950 bg-[#006112] w-full px-6 py-2 hover:shadow-lg rounded-xl font-medium transition-all ease-in-out duration-500 border btn">
                        Remove
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CartCard