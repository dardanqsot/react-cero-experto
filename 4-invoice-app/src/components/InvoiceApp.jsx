import { getInvoice } from "../services/getInvoice"
export const InvoiceApp = () => {

    const invoice = getInvoice();
    return (
        <>
            <h1> Ejemplo Factura </h1>
            <ul>
                <li> Id: {invoice.id} </li>
                <li> Name: {invoice.name} </li>
            </ul>

            <h3>Datos del cliente</h3>
            <ul>
                <li> { invoice.client.name } </li>
                <li> { invoice.client.lastName } </li>
                <li> { invoice.client.address.country } </li>
                <li> { invoice.client.address.city } </li>
                <li> { invoice.client.address.street } </li>
                
            </ul>

            <h3>Productos de la factura</h3>
            <ul>
                <table>
                    <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                    </thead>
                </table>
                
            </ul>
        </>
    )
}