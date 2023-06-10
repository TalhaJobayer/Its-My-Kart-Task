import React from 'react';
import  './AddProduct.css'

const AddProduct = () => {
    return (
        <div className='fullbody'>
   
    <form>
        <h3>Add Products Form</h3>

        <label >Product Name</label>
        <input type="text" placeholder="Product Name" />

        <label >Model</label>
        <input type="text" placeholder="Model" />
        <label >Price</label>
        <input type="text" placeholder="Price" />
        <label >Image URL</label>
        <input type="text" placeholder="Image URL" />

        <button>Add Now</button>
        
    </form>
     </div>
    );
};

export default AddProduct;