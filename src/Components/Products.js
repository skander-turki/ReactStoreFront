//import data from  "../products.json";
import Product from "./Product";
import styled from "styled-components";
import  useApi  from "../hooks/useApi";
import {Link} from "react-router-dom";

const ProductsWrapper = styled.div `
  text-align: center;
  display: flex;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Products() {
    const[products, err]= useApi("products");

    //const produits = data.map((produit)=>{

       // return <Product key={produit.id} Produit={produit}  />
   // });
   return(
    <div>
        <ProductsWrapper>
            {products && products.map((produit,index) =>(<Product key={index} Produit={produit}  />))}
            
        </ProductsWrapper>
        <Button>
                  <Link to={'/addproduct'}>  Add Product</Link>
        </Button>
            
     </div>
    );

}
export default Products;
