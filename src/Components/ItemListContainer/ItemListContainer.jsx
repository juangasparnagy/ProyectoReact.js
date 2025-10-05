import { ItemList } from "../ItemList/ItemList"
export const ItemListContainer = ({titulo, productos}) => {
    //estados
    //llamada a api o json local
    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList lista={productos}/>
        </section>
    )
}