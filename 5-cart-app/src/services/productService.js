import { products } from "../data/productos"

export const getProducts = () => {
    return products;
}

export const calcultaeTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}