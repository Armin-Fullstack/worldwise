import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import CityList from "./components/CityList";

const BASE_URL = "http://localhost:9000"
export default function App(): JSX.Element {
  const [cities , setCities] = useState([])
  const [isLoading , setIsLoading] = useState<boolean>(false)
  
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities()
  } , [])

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="product" element={<Product />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="login" element={<Login />}/>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading}/>} /> 
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
          <Route path="countries" element={<p>Countries</p>}/>
          <Route path="form" element={<p>Form</p>}/>
        </Route>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}