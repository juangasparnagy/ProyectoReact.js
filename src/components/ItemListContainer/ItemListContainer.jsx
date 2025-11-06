import { ItemList } from "../ItemList/ItemList"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({titulo}) => {
    const [products,setProducts] = useState([])
    const { category } = useParams()

    //llamada a api o json local
    useEffect(() => {
        fetch("/data/products.json")
        .then((res) => {
            if(!res.ok){throw new Error("No hay productos")}
            return res.json()
        })
        .then((data) => {
            if (category) {
                setProducts(data.filter( prod => prod.category === category))
            }
            else {
                setProducts(data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    },[category])
    return (
        <section>
            <h1>{titulo}</h1>
            <div className="galeria"><ItemList lista={products}/></div>
        </section>
    )
}