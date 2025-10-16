import { ItemList } from "../ItemList/ItemList"
import { useState,useEffect } from "react"
export const ItemListContainer = ({titulo}) => {
    
    const [products,setProducts] = useState([])

    //llamada a api o json local
    useEffect(() => {
        fetch("/data/products.json").then((res) => {
            if(!res.ok){throw new Error("No hay productos")}
            return res.json()
        }
        ).then((data) => {
            setProducts(data)
        }
        ).catch((err) => {
            console.log(err)
        })
    },[])
    return (
        <section>
            <h1>{titulo}</h1>
            <div className="galeria"><ItemList lista={products}/></div>
        </section>
    )
}