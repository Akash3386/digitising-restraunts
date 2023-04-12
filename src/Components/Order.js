import React,{useState} from "react";


const Order = (props) => {

    const [enteredProductId,setEnteredProductId] = useState('')
    const [enteredProductPrice,setEnteredProductPrice] = useState('')
    const [enteredProductName,setEnteredProductName] = useState('')


    const changeProductIdHandler = event => {
        setEnteredProductId(event.target.value);
    }

    const changeProductPriceHandler = event => {
        setEnteredProductPrice(event.target.value);
    }

    const changeProductNameHandler = event => {
        setEnteredProductName(event.target.value);
    }

   


    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            Id: enteredProductId,
            price: enteredProductPrice,
            name: enteredProductName
        }
        props.onSaveOrderedData(data);
        console.log(data)
        localStorage.setItem(`${data.Id}`,`entereamount:${data.price} description:${data.name}, orderId:${data.Id}`)
        setEnteredProductId('')
        setEnteredProductPrice('')
        setEnteredProductName('')
        
    }

    return <form onSubmit={submitHandler}>
           <label htmlFor="order">Product ID:</label>
           <input type='number' id='order' value={enteredProductId} onChange={changeProductIdHandler}></input>

           <label htmlFor="number">Selling Price:</label>
           <input type='number' id='dish' value={enteredProductPrice} onChange={changeProductPriceHandler}></input>
          
        
          <label htmlFor="text">Product Name:</label>
          <input type='text' id='text' value={enteredProductName} onChange={changeProductNameHandler}></input>
       
           
    
        <button type="submit">Add Product</button>
    </form>
}

export default Order