import { Item } from "../Item/Item"
export const ItemList = ({lista}) => {
    return (<>
    {lista.length ? (
                    lista.map((prod) => 
                        <Item key={prod.id} {...prod}><button>Botón children {prod.nombre}</button></Item>
                    // <article key={prod.id}>
                    //     <h2>{prod.nombre}</h2>
                    //     <p>Precio: ${prod.precio}</p>
                    //     <p>Descripcion: ${prod.descripcion}</p>
                    // </article>    
                    
            )) : (
               <p>No hay productos</p>)}
           </>
    )
}