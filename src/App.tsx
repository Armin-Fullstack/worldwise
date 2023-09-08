import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

export default function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="product" element={<Product />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="app" element={<AppLayout />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}