import './App.css'
import Tab from './Components/Tab'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import { Suspense, useState } from 'react'


const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}


const productsPromise = getProducts()


function App() {

  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar />
      <Tab setActiveTab={setActiveTab} />
      {activeTab === "model" && <Products activeTab={activeTab}
        productsPromise={productsPromise} carts={carts}
        setCarts={setCarts} />}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
    </>
  )
}

export default App
