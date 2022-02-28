import styled from "styled-components";
import React, { useState} from "react";
import {Link} from "react-router-dom";
import { queryApi } from "../utils/queryApi";

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;

`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #DB7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation:  clignote 2s linear infinite;
  @keyframes clignote {  
  50% { opacity: 0.5; }
}
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color:white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
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
const UButton = styled(Button)`
color: blue;
border-color: blue;
`;
const DButton = styled(Button)`
color: red;
border-color: red;
`;


function Product (props){
        const [like,setState] = useState(0);
        const [produit , setProduit] = useState(props.Produit)

const addLikes = () => {
        setState( like +1)}

const deleteitem = (id) => {
  alert('A product with Title :"' + produit.title +
  'is deleted');
  queryApi(`product/${produit._id}`,"DELETE");

}




    if (produit.likes > 4){
        return( <ProductFrameBest>
            <ProductImageWrapperBest>
                <ProductImageBest src={`http://localhost:3008/uploads/${produit.image}`} />
            </ProductImageWrapperBest>
            <ProductInfoWrapperBest><Link to={`/DetailProd/${produit._id}`}>{produit.title}</Link></ProductInfoWrapperBest>
            <ProductInfoWrapperBest>{produit.price}</ProductInfoWrapperBest>
            <ProductInfoWrapperBest>Likes: {produit.likes} </ProductInfoWrapperBest>
            <Button onClick={addLikes}>Like</Button>
            <UButton><Link  to={`/updateproduit/${produit._id}`}>Update</Link></UButton>
            <DButton  onClick={deleteitem()}><Link  to='/Products'>Delete</Link></DButton>
        </ProductFrameBest>)
    }
    else
    return (

        <ProductFrame>

            <ProductImageWrapper>
                <ProductImage src={`http://localhost:3008/uploads/${produit.image}`} />
            </ProductImageWrapper>
            <ProductInfoWrapper> <Link  to={`/DetailProd/${produit._id}`}>{produit.title}</Link> </ProductInfoWrapper>
            <ProductInfoWrapper>{produit.price} </ProductInfoWrapper>
            <ProductInfoWrapper>Likes: {produit.likes} </ProductInfoWrapper>
            <Button onClick={addLikes}>Like</Button>
            <UButton><Link  to={`/updateproduit/${produit._id}`}>Update</Link></UButton>
            <DButton  onClick={addLikes}><Link  to='/Products'>Delete</Link></DButton>
            
        </ProductFrame>
    );

}

export default Product;
