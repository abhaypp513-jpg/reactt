


import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home"

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
   
    
    <Routes>
      <Route path="/" Component={MainLayout}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/product/:productId" Component={SingleProduct} />
        <Route path="/product/:productId/:reviewId" Component={SingleProduct} />
        <Route path="*" Component={PageNotFound} />   
      </Route>
    </Routes>
  );
}

export default App; 