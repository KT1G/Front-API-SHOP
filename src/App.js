import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import NavbarMovil from "./components/Header/NavbarMovil"
import './styles/app.css'
 

function App() {
  return (
    <main className="main__container">
      <Header />
      <Outlet />
      <NavbarMovil />
      <Footer/> 
    </main>
  )
}

export default App
