import { useContext } from "react"
import { CartContext } from '../contexts/CartContext';
import visa from '../assets/icons/visa.svg'
import { NumberInput } from "@mantine/core";
import { DateInput } from '@mantine/dates';

const OrderSummary = () => {
    const { cart } = useContext(CartContext);
    // console.log(cart)
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Order summary</h1>
            <div className="flex flex-col gap-2 h-56 overflow-y-auto">
                {cart && cart.length > 0 && cart.map(item => {
                    return (
                        <div key={item.id} className="flex items-end justify-between gap-2">
                            <div className="flex flex-col ">
                                <p className="text-base font-semibold">{item.name}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <p className="text-base font-semibold">$ {item.price * item.quantity}</p>
                        </div>
                    )
                })
                }
            </div>
            <hr />
            <div className="flex justify-between ">
                <div className="flex flex-col gap-2 w-full">
                    <h2>Payment method</h2>
                    <div className="flex flex-col md:flex-row items-center gap-1 w-full justify-between">
                        <h3>Card number</h3>
                        <div className="w-1/2"> <div className="flex items-center gap-3">
                            <img src={visa} alt="card" className="h-10" />
                            <NumberInput size='xs' radius='md' type="number" className="w-full"/>
                        </div></div>

                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-1">
                        <h3>Expiry</h3>
                        <div className="w-1/2"><DateInput valueFormat="MM/YY" placeholder="MM/YY" allowDeselect size="xs" radius='md' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row items-center justify-between">
                        <h3>Cvv</h3>
                        <div className="w-1/2">
                            <NumberInput size="xs" radius='md' min={0} type="number" placeholder="***" />
                        </div>

                    </div>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default OrderSummary