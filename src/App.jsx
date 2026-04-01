import './App.css'
import Tab from './Components/Tab'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import { useState } from 'react'
import Banner from './Components/Banner'
import Steps from './Components/Steps'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import ShoppingCartPage from './Components/ShoppingCartPage'
import { Toaster } from 'react-hot-toast'

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const productsPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])

  // --- Cart tab logic ---

  if (activeTab === "cart") {
    return (
      <>
        <Navbar cartLength={carts.length} />

        {carts.length > 0 ? (
          <Cart carts={carts} setCarts={setCarts} />
        ) : (
          <ShoppingCartPage setActiveTab={setActiveTab} />
        )}

        <Toaster position="top-right" />
      </>
    );
  }

  // 👉 Default view
  return (
    <>
      <Navbar cartLength={carts.length} />

      <Toaster position="top-right" reverseOrder={false} />

      <Banner />

      <Tab setActiveTab={setActiveTab} cartLength={carts.length} />

      {activeTab === "model" && (
        <Products
          activeTab={activeTab}
          productsPromise={productsPromise}
          carts={carts}
          setCarts={setCarts}
        />
      )}

      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}



export default App