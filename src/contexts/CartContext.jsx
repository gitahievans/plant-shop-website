import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

    return <CartContext.Provider value={{ cart, setCart, cartTotalAmount, setCartTotalAmount, cartTotalQuantity, setCartTotalQuantity }}>
        {children}
    </CartContext.Provider>
}