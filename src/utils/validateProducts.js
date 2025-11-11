export const validateProduct = (product, fileRequired=true) => {
    const errors = {}
    if(!product.name.trim()){
        errors.name = "El nombre es obligatorio"
    }
    if(!product.price || product.price <= 0 ) {
        errors.price = "El precio debe ser mayor a 0"
    }
    if(!product.description.trim()){
        errors.description = "El producto tiene que tener una descripción"
    }
    if(fileRequired && !product.file){
        errors.file = "archivo obligatorio"
    }
    if(!product.category.trim()){
        errors.category = "Categoría obligatorio"
    }
//    console.log("terminó de validaar")
//    console.log("el validado es propio es: "+product+" nombre:   "+product.name+" descripción:  "+product.description + product.file)
    return errors
}