// import logo from './logo.svg';
// import './App.css';
import React,{useState, useEffect} from 'react';
import OrderedProduct from './Components/OrderedProduct';
import Order from './Components/Order';
// import ListOrder from './Components/ListOrder';
// import Table from './Components/Table'

function App() {

  const [enteredData,setEnteredData] = useState('')

  const getDataHandler = (data) => {
      setEnteredData(data)
  }



  useEffect( () => {
  
      <OrderedProduct detail={enteredData}></OrderedProduct>
    
  },[enteredData])
  
  

  

  return (
    <div >
      
      <Order onSaveOrderedData={getDataHandler}></Order>
      <section>
         <h2>Products</h2>
         {enteredData && <OrderedProduct detail={enteredData}></OrderedProduct>}
         <h4>The total worth of product is Rs {enteredData.price}</h4>
      </section>
    </div>
  );
}

export default App;
