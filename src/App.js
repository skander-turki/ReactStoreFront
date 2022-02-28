import  React, {lazy , Suspense}   from "react";
//import  Home from "./Components/Home";

//import ProductDetail from "./Components/ProductDetail";
//import NotFound from "./Components/NotFound";
import {Route ,Routes} from "react-router-dom";
import styled from "styled-components";
//import Products from "./Components/Products";

import Navbar from "./Components/Navbar";
import ProductUpdate from "./Components/ProductUpdate";
const Home = React.lazy(() => import("./Components/Home"));
const Products = React.lazy(() => import("./Components/Products"));
const ProductDetail = React.lazy(() => import("./Components/ProductDetail"));
const NotFound = React.lazy(() => import("./Components/NotFound"));
const Addproduct = React.lazy(() => import("./Components/Addproduct"));

function App() {

    const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
  return (
   
      <AppFrame>
           <Navbar/>
           
          <Suspense fallback={<div>Loading ... </div>}>
                    <Routes>
                        <Route exact path="/" element={<Home/> } />
                        <Route  path="/Products" element={<Products/> }/>
                        <Route  path="/DetailProd/:id" element={ <ProductDetail/>}/>
                        <Route  path="/addproduct" element={ <Addproduct/>}/>
                        <Route  path="/updateproduit/:id" element={ <ProductUpdate/>}/>
                        <Route  path="*" element={ <NotFound/>}/>
                    </Routes>
          </Suspense>
      </AppFrame>
  );

}
export default App;
