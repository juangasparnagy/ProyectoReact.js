import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const exist = (id) => {
        const exist = cart.some((p) => p.id === id)
        return (exist)
    }

    const addItem = (item) => {
        if (exist(item.id)){
            //cuido no mutar el array con map
            const updatedCart = cart.map((prod) => {
                if(prod.id === item.id){
                    //cuido no mutar el objeto
                    return {...prod, quantity: prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
            alert("Agregado al carrito")
        }else{
            setCart([...cart,item])
            alert(`${item.name} agregado`)
        }
    }
    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id)
        setCart(filtered)
        alert("Producto Eliminado")
    }
     const getTotalItems = () => {
         const totalItems = cart.reduce((acc,p) => acc + p.quantity,0)
         return totalItems
     }
     const total = () => {
        const total = cart.reduce((acc,p) => acc + p.price*p.quantity,0)
        return Math.round(total*100)/100
     }
    const clearCart = () => {
        setCart([])
    }
    const checkout= () => {
        const ok = confirm("¿Seguro que desea finalizar la compra?")
        if (ok){
            alert("¡Se realizó la compra con éxito!")
            clearCart()
        }   
     }
    const values = {cart, addItem, clearCart, getTotalItems, total, deleteItem,checkout}
    
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}