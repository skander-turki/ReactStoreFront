import styled from "styled-components";
import React, { useState} from "react";
import  useApi  from "../hooks/useApi";
import { queryApi } from "../utils/queryApi";




function Addproduct(){
    const [product , setproduit] = useState({
        title:"",
        description:"",
        image:"",
        price:"",
        likes:"0"
        
    })
    
    
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
      const handleSubmit=(e)=>{
          alert('A form was submitted with Title :"' + product.title+
          '" ,description :"'+ product.description +'" and price :"' + product.price + '"');
        e.preventDefault();
        queryApi("product",product,"POST",true);
        
    
      }

return <form onSubmit={(e) => {handleSubmit(e)}}>

<div >
  <h1>ADD NEW PRODUCT</h1>  
  <label >title :</label>  
  <input type="text" name="TITLE" required onChange={(e) => {handletitleChange(e)}} />
  
  <label >description :</label> 
  <input type="text" name="DESCRIPTION"  required onChange={(e) => {handle_description_Change(e)}}/>
  <input type="text" name="PRICE" required onChange={(e) => {handlepriceChange(e)}}/>
  <input type="file" name="IMAGE" required onChange={(e) => {handleImageChange(e)}}/>


<input type="submit" value="Envoyer" />
</div>
</form>;
}

export default Addproduct;