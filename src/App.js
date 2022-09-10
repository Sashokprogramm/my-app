import React from "react";
import "./App.css"
import { BrowserRouter , Routes, Route} from "react-router-dom";
import About from "./pages/about/About"
import Form from "./pages/form/Form"
import Header from "./components/Header"
import NotFound from "./pages/notFound/NotFound";
import Catalog from "./pages/Catalog/Catalog"; 
import Products from "./pages/products/Products"
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="about" element={<About/>}/>
                <Route path="form" element={<Form/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/catalog/:catalog_name" element={<Products/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
} 

// localhost:3000/ - base_url , домен
// localhost:3000/products - Header , Products
// localhost:3000/ - Header, Main
// localhost:3000/About - Header , About
// localhost:3000/Main - Header , NotFound



export default App;

