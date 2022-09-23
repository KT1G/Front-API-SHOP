import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import './styles/app.css'
 

function App() {
  return <main className="main__container">
    <Header />
    <Outlet/>
    <Footer />
  </main>
}

export default App
