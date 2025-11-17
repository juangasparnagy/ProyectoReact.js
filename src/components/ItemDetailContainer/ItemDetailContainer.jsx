import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [detail,setDetail] = useState({})
    const {id} = useParams()
    
    //Esto es para poder elegir fácilmente entre json local y mockapi como fuente de
    //los productos a mostrar.
    const productsJason = "/data/products.json"
    const productsMyMockapi = "https://6900bc35ff8d792314bb37b2.mockapi.io/products"

    useEffect(() => {
        //podría usar getProducts de products también.
        const productId = `https://6900bc35ff8d792314bb37b2.mockapi.io/products/${id}`
        fetch(productId)
            .then((res) => {
            if(!res.ok){throw new Error("No hay producto")}
            return res.json()})
            .then((data) => {
                if(data){
                  setDetail(data)
                }else{
                  throw new Error("No se encontró el producto")
                }
            })
            .catch((err) => {
                console.log(err)
            })    
    },[id])
    return <main>
        {Object.keys(detail).length ? (
            <ItemDetail detail={detail}/>
        ):(
        <p>Cargando...</p>
        )}
        
    </main>
}