import { useEffect, useReducer } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { itemsReducer } from "./reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./reducer/itemsActions";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";


export const CartApp = () => {
    
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();
    return (
        <>
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>             
                <CartRoutes 
                    cartItems={cartItems}  
                    handlerAddProductCart= {handlerAddProductCart}
                    handlerDeleteProductCart = {handlerDeleteProductCart}
                    />

            </div>
        </>
    )
}