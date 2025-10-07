import { Item } from "../Item/Item"
export const ItemDetail = ({detail}) => {
    return (<>
    <Item {...detail}><button id={detail.id} className="btn">Comprar!!!</button></Item></>)
}