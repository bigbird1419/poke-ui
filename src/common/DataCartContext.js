import { createContext, useState, useCallback, useEffect } from "react";

import * as CartService from '../services/cartService'

const CartContext = createContext();

function DataCartProvider({ children }) {
    const [dataCart, setDataCart] = useState([])
    const handleSaveOrUpdate = useCallback((pokemon, quantity) => {
        const message = CartService.saveCart(pokemon, quantity)
        setDataCart(CartService.getCart())
        return message
    }, [])
    const handleInCreaQuantity = useCallback((pokemon, quantity) => {
        CartService.saveCart(pokemon, quantity + 1)
        setDataCart(CartService.getCart())
    }, [])
    const handleDeCreaQuantity = useCallback((pokemon, quantity) => {
        if (quantity > 1) {
            quantity -= 1
        } else {
            quantity = 1
        }
        CartService.saveCart(pokemon, quantity)
        setDataCart(CartService.getCart())
    }, [])
    const handleDeleteOnCart = useCallback((index) => {
        CartService.delCart(index)
        setDataCart(CartService.getCart())
    }, [])
    const handleDelAllCart = useCallback(() => {
        CartService.delAll()
        setDataCart(CartService.getCart())
    }, [])
    const totalQuantity = CartService.getTotalQuantity()
    const totalCoin = CartService.getTotalCoin()

    const val = {
        dataCart,
        handleSaveOrUpdate,
        handleInCreaQuantity,
        handleDeCreaQuantity,
        handleDeleteOnCart,
        handleDelAllCart,
        totalQuantity,
        totalCoin
    }

    useEffect(() => {
        setDataCart(CartService.getCart())
    }, [])

    return (
        <CartContext.Provider value={val}>{children}</CartContext.Provider>
    )
}

export { CartContext, DataCartProvider }