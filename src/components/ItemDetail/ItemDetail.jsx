import { Item } from "../Item/Item"
import { useCartContext } from "../../context/CartContext/useCartContext"
import { Count } from "../Count/Count"

export const ItemDetail = ({detail}) => {
    const  { addItem } = useCartContext()
    const handleAdd = (quantity) => {
        addItem({...detail, quantity})
    }
    return (<>
    <Item {...detail}>
        <Count btnText={"agrega"} onConfirm={handleAdd}></Count>
    </Item></>)
}