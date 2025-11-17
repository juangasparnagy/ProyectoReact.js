import { ItemList } from "../ItemList/ItemList"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/products"


export const ItemListContainer = ({titulo}) => {
    const [products,setProducts] = useState([])
    const { category } = useParams()

    const productsJason = "/data/products.json"
    const productsMyMockapi = "https://6900bc35ff8d792314bb37b2.mockapi.io/products"


    useEffect(() => {
        getProducts(category)
        .then((data)=>setProducts(data))
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