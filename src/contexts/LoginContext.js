import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/LoginReducer'
const LoginContext = createContext({
    modalOpen: {
        signin: false,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: false,
        category: false,
        exit: false,
        updateItemShop: false,
        shop: false,
        filterShop:false,
        sound:false
    },
    dispatch: () => { }

})
export { LoginContext }


export default function LoginContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {
        signin: false,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: false,
        category: false,
        exit: false,
        updateItemShop: false,
        shop: false,
        filterShop:false,
        sound:false
    })


    return (
        <LoginContext.Provider
            value={{
                state,
                dispatch
            }}>
            {children}
        </LoginContext.Provider>
    )
}
