import styled from "styled-components";
import React, { useState} from "react";
import  useApi  from "../hooks/useApi";
import { queryApi } from "../utils/queryApi";
import {Link, useParams  } from "react-router-dom";

const Wrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`;
const Title = styled.h2`
text-transform: uppercase;
color: black;
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

function ProductUpdate(){
  const {id} = useParams();
  const[pp, errr]= useApi(`product/${id}`)
  console.log(pp);
  const [product , setproduit] = useState({
    _id: {},
    title:"",
    description:"",
    image:"",
    price:"",
    likes:"0"
    
});
React.useEffect(() => {
  setproduit({
    title: pp && pp.title,
    description:pp && pp.description,
    image:pp && pp.image,
    price:pp && pp.price,
    likes:pp && pp.likes
})
},[pp] );

  const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(product)
  queryApi(`product/${pp._id}`,product,"PUT",true);
  alert('A form was submitted with Title :"' + product.title+
    '" ,description :"'+ product.description +'" and price :"' + product.price + '"');
}
const handletitleChange =(e)=>{
  setproduit({...product,title: e.target.value});
}
const handlepriceChange =(e)=>{
  setproduit({...product,price: e.target.value});
}
const handle_description_Change =(e)=>{
  setproduit({...product,description: e.target.value});
}
const handleImageChange= (e)=> {
  setproduit({...product,image: e.target.files[0]});
}
  

  
  
  return (
    <Wrapper className="fade">
    <Form onSubmit={(e) => {handleSubmit(e)}}>
      <Title>UPDATE PRODUCT</Title> 
      <img src={`http://localhost:3008/uploads/${product.image}`} alt="aa"/>
      <FormGroup>
        <FormField type="text" name="TITLE" value= {product.title} required onChange={(e) => {handletitleChange(e)}}></FormField>
      </FormGroup>
      <FormGroup>
        <FormField type="text" name="DESCRIPTION" value={product.description} required onChange={(e) => {handle_description_Change(e)}} ></FormField>
      </FormGroup>
      <label >Price :</label> 
      <FormGroup>
        <FormField type="number" name="PRICE" value={product.price} required onChange={(e) => {handlepriceChange(e)}} ></FormField>
      </FormGroup>
      <label >Image :</label> 
      <FormGroup>
        <FormField type="file" name="IMAGE" required onChange={(e) => {handleImageChange(e)}}></FormField>
      </FormGroup>
      <FormButton>Save</FormButton>
    </Form>
    </Wrapper>
  );
  

}

export default ProductUpdate;