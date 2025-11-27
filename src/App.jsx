import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './layouts/MainLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { Login } from './components/Login/Login'
//Recordar que esto está funcionando en netlify porque está usando un archivo public/_redirects con este contenido: /* /index.html   200

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
          {/*MainLayout ya trae el header, por eso se remueve de App.jsx*/}
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="/" element={<ItemListContainer titulo={"Bienvenidos a mi tienda de panadería"}/>}/>
              <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
              <Route path="/carrito/" element={<Cart/>}></Route>
              <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos a mi tienda de panadería"}/>}></Route>
            </Route>
            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<Login/>} />
              <Route path="alta-productos" element={
                <RutaProtegida>
                  <ProductFormContainer/>
                </RutaProtegida>
                }/>
            </Route>
            {/*<Route path="/admin" element={<ProductFormContainer></ProductFormContainer>}></Route>*/}
          </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
