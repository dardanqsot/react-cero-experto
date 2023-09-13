import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
export const CartApp = () => {
    console.log(initialCartItems);

    const [cartItems, setcartItems] = useState(initialCartItems);

    const handlerAddProductCart = ( product ) => {

        const hasItem = cartItems.find( (i) => i.product.id === product.id);
        if ( hasItem ){
/*
            setcartItems([
                ...cartItems.filter( (i) => i.product.id !== product.id),
                {
                    product,
                    quantity: hasItem.quantity + 1,
                }
            ])
            */
            setcartItems(
                cartItems.map( (i) => {
                    if ( i.product.id === product.id ){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
                )
        } else {
            setcartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1
                }
            ]);
        }
    }
    
    const handlerDeleteProductCart = (id) => {
        setcartItems([
            ...cartItems.filter( (i) => i.product.id !== id)
        ])
    }
    return (
        <>

            <div className="container my-4">

                <h3>Cart App</h3>
                <CatalogView handler={handlerAddProductCart}/>
                { cartItems?.length <= 0 || 
                    (
                        <div className="my-4 w-50">
                            <CartView items = {cartItems} handlerDelete = {handlerDeleteProductCart}/>
                        </div>
                    )}
                

            </div>
        </>
    )
}