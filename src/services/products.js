
const BASE_URL = "https://6900bc35ff8d792314bb37b2.mockapi.io/products"
//Recordar que la sugerencia de https://6900bc35ff8d792314bb37b2.mockapi.io/:endpoint, 
//al usarla no van los dos puntos ":" antes del nombre del endpoint.

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(product)
    })
    if(!res.ok){throw new Error("no se pudo crear el producto")}
    if(res.ok){console.log("Sí, se pudo CREAR EL producto: "+ product.name)}
    const result = await res.json()
    return result
}