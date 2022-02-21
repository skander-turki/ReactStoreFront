import styled from "styled-components";
import React, { useState} from "react";
import  useApi  from "../hooks/useApi";




function Addproduct(){
    const [title , settitle] = useState('');
    const [description , setdescription] = useState('');
    const [price , setprice] = useState('');
    const product ={title,description,price};
    
    
    const handletitleChange =(e)=>{
        settitle(e.target.value);
      }
    const handlepriceChange =(e)=>{
        setprice(e.target.value);
      }
    const handledescriptionChange =(e)=>{
        setdescription(e.target.value);
      }
      const handleSubmit=(e)=>{
          alert('A form was submitted with Title :"' + title+
          '" ,description :"'+ description +'" and price :"' + price + '"');
        e.preventDefault();
        
    
      }

return <form onSubmit={(e) => {handleSubmit(e)}}>

<div className="row">
  <h1>ADD NEW PRODUCT</h1>  
  <label >title :</label>  
  <input type="text" name="TITLE" required onChange={(e) => {handletitleChange(e)}} />
  
  <label >description :</label> 
  <input type="text" name="DESCRIPTION"  required onChange={(e) => {handledescriptionChange(e)}}/>
  <input type="text" name="PRICE" required onChange={(e) => {handlepriceChange(e)}}/>

<input type="submit" value="Envoyer" />
</div>
</form>;
}

export default Addproduct;