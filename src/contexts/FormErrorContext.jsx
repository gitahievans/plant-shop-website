/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createContext } from 'react';

export const FormErrorContext = createContext();

export const FormErrorContextProvider = ({ children }) => {
    const [formErrors, setFormErrors] = useState(null);


    return <FormErrorContext.Provider value={{ formErrors, setFormErrors }}>
        {children}
    </FormErrorContext.Provider>
};
