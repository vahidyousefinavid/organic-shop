


import React, { createContext, useEffect, useState } from 'react'

const ModalContext = createContext({
    CartProduct: [],
    addPro: (product) => { },

})
export { ModalContext }

export default function ModalContextProvider({ children }) {
    const [Pro, setPro] = useState([])


    const addPro = async (product) => {


        setPro(product)

        // setData([product])

    }


    return (
        <ModalContext.Provider value={{ CartProduct: Pro, addPro: addPro }}>
            {children}
        </ModalContext.Provider>
    )
}
