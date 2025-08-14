import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Home'
import Products from "./pages/Products";
import Inventory from "./components/Inventory";
import ProductForm from "./components/ProductForm";


function App() {

  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="products" element={<Products />} />
          <Route path="productForm" element={<ProductForm />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes>
      
    </Router>
  )
}

export default App
