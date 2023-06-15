import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    return <CartContext.Provider value={{ cart, setCart, cartTotal, setCartTotal }}>
        {children}
    </CartContext.Provider>
}