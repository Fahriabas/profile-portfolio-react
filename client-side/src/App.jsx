import Aos from "aos"

import "./App.css"
import { useEffect } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {


  useEffect(() => {
    Aos.init
  }, [])
  return (
    <>
    <Header/>
    <main></main>
    <Footer/>
    </>
  )
}

export default App
