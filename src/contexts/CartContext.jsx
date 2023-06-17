import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const storedCart = JSON.parse(localStorage.getItem('cart'));

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(storedCart);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return <CartContext.Provider value={{ cart, setCart, cartTotalAmount, setCartTotalAmount, cartTotalQuantity, setCartTotalQuantity }}>
        {children}
    </CartContext.Provider>
}