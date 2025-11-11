import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <div>
    <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer titulo={"Bienvenidos a la tienda de cosas"}/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/carrito/" element={<Cart/>}></Route>
        <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos a la tienda de cosas"}/>}></Route>
        <Route path="/admin" element={<ProductFormContainer></ProductFormContainer>}></Route>
      </Routes>
    <Footer/>
      </div>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
