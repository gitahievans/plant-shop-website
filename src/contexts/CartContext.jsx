import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    // console.log(cartTotalAmount)
    // console.log(cartTotalQuantity)



    // let initialCartState = cart.reduce((cartTotal, cartItem) => {
    //     const { price, quantity } = cartItem;
    //     const itemTotal = price * quantity;

    //     cartTotal.total += itemTotal;
    //     cartTotal.quantity += quantity;

    //     return cartTotal;
    // }, {
    //     total: 0,
    //     quantity: 0,
    // })

    // console.log(initialCartState)


    return <CartContext.Provider value={{ cart, setCart, cartTotalAmount, setCartTotalAmount, cartTotalQuantity, setCartTotalQuantity }}>
        {children}
    </CartContext.Provider>
}