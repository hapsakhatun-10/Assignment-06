import './App.css'
import Products from './Components/Products'
import { Suspense } from 'react'
function App() {

  const getProducts = async () => {
    const res = await fetch("/products.json")
    return res.json()
  }


  const productsPromise = getProducts()
  return (
    <>

      <Suspense fallback={<p>Loading...</p>}>
        <Products productsPromise={productsPromise} />
      </Suspense>
    </>
  )
}

export default App
