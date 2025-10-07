import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
    <Header/>
    <ItemListContainer titulo={"Bienvenidos a la tienda de cosas"}/>
    <ItemDetailContainer/>
    <Footer/>
    </>
  )
}

export default App
