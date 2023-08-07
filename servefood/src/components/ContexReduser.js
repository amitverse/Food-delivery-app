import React, { createContext, useContext, useReducer } from 'react'

const CartStateContex = createContext()
const CartDispatchContex = createContext()

const reduser = (state, action) => {
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id, name:action.name, price:action.price, size:action.size, qnt:action.qnt, img:action.img}]
        default:
            console.log("Error in Reduser")
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduser, [])
    return (
        <CartDispatchContex.Provider value={dispatch}>
            <CartStateContex.Provider value={state}>
                {children}
            </CartStateContex.Provider>
        </CartDispatchContex.Provider>
    )
}

export const useCart = () => useContext(CartStateContex)
export const useDispatchCart = () => useContext(CartDispatchContex)