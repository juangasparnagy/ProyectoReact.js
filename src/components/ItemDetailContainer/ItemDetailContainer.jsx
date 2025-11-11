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
        fetch(productsMyMockapi)
            .then((res) => {
            if(!res.ok){throw new Error("No hay producto")}
            return res.json()})
            .then((data) => {
                const found = data.find(p => p.id === id)
                if(found){
                  setDetail(found)
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