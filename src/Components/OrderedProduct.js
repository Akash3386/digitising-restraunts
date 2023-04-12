import React from "react";

const OrderedProduct = (props) => {

    const OnDeleteHandle = () => {
        console.log('jl')
        localStorage.removeItem(props.detail.Id)
    }

    return (

            <li>
                {props.detail.price}-{ props.detail.name } 
                <button onClick={OnDeleteHandle}>Delete Product</button>
            </li>
            
        
    )
}

export default OrderedProduct