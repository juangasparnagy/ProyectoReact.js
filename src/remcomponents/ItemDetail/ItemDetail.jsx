import { Item } from "../Item/Item"
import { CartContext } from "../../context/CarContext/CartContext"
import { useCartContext } from "../../context/CarContext/useCartContext"
export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext()
    return (<>
    <Item {...detail}><button onClick={() => {addItem(detail)}} id={detail.id} className="btn">Mandar al Carrito</button></Item></>)
}