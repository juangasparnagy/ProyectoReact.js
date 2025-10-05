import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'

function App() {
  //PROVISORIAMENTE
  const arrayProductos=[
    {nombre:"remera",precio:"5000",descripcion:"remera de algodon",id:1},
    {nombre:"pantalon",precio:"15000",descripcion:"chupín",id:2},
    {nombre:"bufanda",precio:"1000",descripcion:"de lana",id:3}]
   const arrayProductos2=[]
  return (
    <>
    <Header/>
    <ItemListContainer productos={arrayProductos} titulo={"Biemvenidos a la tienda de cosas"}/>
    <Footer/>
    </>
  )
}

export default App
