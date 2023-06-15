import React, { useContext } from 'react'
import CartCard from './CartCard'
import { CartContext } from '../contexts/CartContext'


const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const cost = cart.map(c => parseInt(c.price)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const shipping = 4.99;
    return (
        <div className="py-10">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className=" mx-auto justify-center flex flex-col items-center lg:flex-row gap-4 relative">
                <div className="flex flex-col gap-4 rounded-lg md:w-full">
                    {cart && cart.length > 0 ?
                        cart.map(cartItem => <CartCard key={cartItem.id} cartItem={cartItem} />) : <p>No cart Items</p>
                    }
                </div>
                {/* <!-- Sub total --> */}
                <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 lg:w-1/3 lg:self-start lg:mr-20 w-full lg:sticky lg:right-0 lg:top-20 lg:bottom-16">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">$ {cost}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">$ {shipping}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            {cost ? <p className="mb-1 text-lg font-bold">$ {cost - shipping}</p> : <p className="mb-1 text-lg font-bold">$ 0</p>}
                            <p className="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 btn">Check out</button>
                </div>
            </div>
        </div>
    )
}

export default Cart