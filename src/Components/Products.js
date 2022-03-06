//import data from  "../products.json";
import Product from "./Product";
import styled from "styled-components";
import  useApi  from "../hooks/useApi";
import {Link} from "react-router-dom";
import React, { useMemo, useState } from "react";

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
const FormGroup = styled.div`
margin: 10px 0;
display: flex;
flex-direction: column;
`;
const Form = styled.form`
text-transform: uppercase;
color: black;
display: flex;
flex-direction: column;
width: 33%;
align-self: center;
`;
const FormField = styled.input`
color: black;
padding: 15px;
outline: 0;
border-width: 0 0 2px;
border-color: #ebebeb;
::placeholder {
text-transform: uppercase;
font-family: "Kiona";
font-size: large;

letter-spacing: 0.1rem;
}
`;
const FormButton = styled.button`
background: #7b1bf7;
text-transform: uppercase;
color: white;
border-radius: 25px;
padding: 15px;
border: 0;
font-size: large;
margin: 10px 0;
font: 200 larger Kiona;
`;
const FormError = styled.p`
color: #f74b1b;
`;

function Products() {
    const[products, err]= useApi("products");
    const [text, setText] = React.useState("");
    const [search, setSearch] = React.useState("");
    const handleSearch = (event) => {setSearch(text);};
    const filterd = useMemo(() => {
        if(!search) return products;
          return products?.filter((product) => {
          console.log("Filter function is running ...");
      return product.title.toLowerCase().includes(search.toLowerCase());
          })
    },[search,products]
     );
    const filteredProducts = products?.filter((product) => {
      console.log(search);
      return product.title.toLowerCase().includes(search.toLowerCase());
      },[search]
      );
      
   return(
    <div>
          
          <FormGroup>
          <FormField
            type="text"
            name="title"
            placeholder="title"
            value={text}
            onChange={(event)=>{setText(event.target.value)}}>
      </FormField>
      </FormGroup>
<FormButton onClick={handleSearch}>Search</FormButton>

        <ProductsWrapper>
            {filterd && filterd.map((produit,index) =>(<Product key={index} Produit={produit}  />))}
            
        </ProductsWrapper>
        <Button>
                  <Link to={'/addproduct'}>  Add Product</Link>
        </Button>
            
     </div>
    );

}
export default Products;
