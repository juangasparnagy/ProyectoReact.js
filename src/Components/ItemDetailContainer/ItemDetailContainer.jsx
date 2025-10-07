import { useState,useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [detail,setDetail] = useState({})
    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
            if(!res.ok){throw new Error("No hay producto")}
            return res.json()})
            .then((data) => {
                const found = data.find(p => p.id === "2")
                if(found){
                  setDetail(found)
                }else{
                  throw new Error("No se encontró el producto")
                }
            })
            .catch((err) => {
                console.log(err)
            })    
    },[])
    return <main>
        {Object.keys(detail).length ? (
            <ItemDetail detail={detail}/>
        ):(
        <p>Cargando...</p>
        )}
        
    </main>
}