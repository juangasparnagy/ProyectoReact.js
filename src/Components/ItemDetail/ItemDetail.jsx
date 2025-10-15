import { Item } from "../Item/Item"
import { CartContext } from "../CarContext/CartContext"
import { useCartContext } from "../CarContext/useCartContext"
export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext()
    return (<>
    <Item {...detail}><button onClick={() => {addItem(detail)}} id={detail.id} className="btn">Mandar al Carrito</button></Item></>)
}