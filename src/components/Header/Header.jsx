import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"
import "./Header.css"
export const Header = () => {
    return (<header>
        <Link to="/"><img className="logo" src="/images/MisPanes.svg" alt="Inicio" /></Link>
        <Link to="/"><h2>Mis Panes</h2></Link>
        <Nav></Nav>
        </header>
    )
}