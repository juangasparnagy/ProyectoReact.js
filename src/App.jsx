import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './Components/CarContext/CarProvider'

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
      </Routes>
    <Footer/>
      </div>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
