import styled from "styled-components";
import React, { useState} from "react";
import  useApi  from "../hooks/useApi";
import { queryApi } from "../utils/queryApi";
import {Link, useParams  } from "react-router-dom";

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 40%;
  height: 100%;
`;
const Content2 = styled.div`
background: transparent !important;
padding: 0.25rem;
width: 60%;
height: 100%;
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
    <ContentBox>
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <h1>UPDATE PRODUCT</h1> 
      <Content1>
      <img src={`http://localhost:3008/uploads/${product.image}`} alt="aa"/>
      </Content1>
      <Content2>
      <label >Title :</label> 
      <input type="text" name="TITLE" value= {product.title} required onChange={(e) => {handletitleChange(e)}} /> 
      <label >Description :</label> 
      <input type="text" name="DESCRIPTION" value={product.description} required onChange={(e) => {handle_description_Change(e)}}/>
      <label >Price :</label> 
      <input type="text" name="PRICE" value={product.price} required onChange={(e) => {handlepriceChange(e)}}/>
      <label >Image :</label> 
      <input type="file" name="IMAGE" required onChange={(e) => {handleImageChange(e)}}/>
      <input type="submit" value="Update" />
      </Content2>
    </form>
    </ContentBox>
  );
  

}

export default ProductUpdate;