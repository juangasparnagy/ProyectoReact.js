import { useState } from "react"
import { ProductFormUI } from "../ProductFormUI/ProductFormUI"
import { validateProduct } from "../../../utils/validateProducts"
import { uploadToImgbb } from "../../../services/uploadImage"
import { createProduct } from "../../../services/products"

import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState()
    const [file, setFile] = useState(null)
    const [errors, setErrors] = useState("")
    const [product, setProduct] = useState({
        name:"",
        price:"",
        category:"",
        description:""
    })
    
    const handleChange =  (e) => {
        const {name,value} = e.target;
        setProduct({...product, [name]: value})
    }
    
    //Recordar hacer asíncrona la función cuando tengo un await

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        setLoading(true)

        const newErrors = validateProduct({...product, file})

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setLoading(false)
            return
        }
        try{
            const imageUrl = await uploadToImgbb(file)
            const productData = {...product, price: Number(product.price), imageUrl}
            await createProduct(productData)
            alert("se cargó con éxito")   
            setProduct({name:"", price:"", category:"", description:""})
        } catch (error){
            setErrors({ general: error.message})
        } finally{
            setLoading(false)
        }
    }


    return <ProductFormUI product={product} errors={errors} loading={loading} onChange={handleChange} onFileChange={setFile} onSubmit={handleSubmit} ></ProductFormUI>
}