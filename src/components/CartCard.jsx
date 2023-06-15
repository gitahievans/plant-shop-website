/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from 'react'
import { NumberInput, Group, ActionIcon, rem } from '@mantine/core';
import { CartContext } from '../contexts/CartContext';

const CartCard = ({ cartItem }) => {
    const { cartTotal, setCartTotal } = useContext(CartContext)
    const [value, setValue] = useState(1);
    const itemPrice = cartItem.price
    const [price, setPrice] = useState(parseFloat(itemPrice));
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        const itemTotal = parseFloat(itemPrice) * value;
        setPrice(itemTotal);
    }, [itemPrice, value]);

    const handleIncrement = () => {
        setValue((prev) => prev + 1)
    };

    const handleDecrement = () => {
        if (value > 1) {
            setValue((prevValue) => prevValue - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-between md:flex-row gap-3 pb-4 max-w-[360px] md:max-w-6xl bg-white hover:bg-slate-50 md:p-8 rounded-2xl hover:shadow-2xl transition ease-in-out duration-500 border relative">
            <img src={cartItem?.image} alt="imge" className='md:w-1/2 w-full h-72 object-cover rounded-xl' />
            <div className='w-full md:w-1/3 px-3 flex flex-col gap-3'>
                <div className='flex flex-col md:flex-row flex-wrap md:items-center gap-2'>
                    <h2 className="md:text-lg font-semibold">{cartItem?.name}</h2>
                    <div className="flex items-center gap-2">
                        <p>Price: </p>
                        <p className='text-green-900 font-semibold'>$ {price}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-3'>
                    <Group spacing={2}>
                        <ActionIcon size={30} variant="default" onClick={handleDecrement}>
                            –
                        </ActionIcon>
                        <NumberInput
                            hideControls
                            value={value || 1}
                            styles={{ input: { width: rem(35), textAlign: 'center' } }}
                        />
                        <ActionIcon size={30} variant="default" onClick={handleIncrement}>
                            +
                        </ActionIcon>
                    </Group>
                    <button
                        onClick={() => {
                            setCart(cart.filter((p) => p.id !== cartItem.id))
                        }}
                        className="text-base text-white hover:bg-green-950 bg-[#006112] px-6 py-2 hover:shadow-lg rounded-xl font-medium transition-all ease-in-out duration-500 border">
                        Remove
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CartCard