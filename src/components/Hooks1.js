import React, { useState, useEffect } from 'react';
import usePrevious from '../customHooks/useCustom';


export default function Functional() {
    const [count, setCount] = useState(0)
    const [price,setPrice]=useState(100)
    const [address, setAddress] = useState('Gurugram')
    const previousAddress=usePrevious(address)
    
    useEffect(() => {
      console.log("With empty array dependency useeffect(ComponentDidMount)");
    }, []);
    
    useEffect(() => {
      console.log("With count dependency useeffect(ComponentDidUpdate)");
    }, [count]);

    useEffect(() => {
      console.log("With price dependency useeffect(ComponentDidUpdate)");
    }, [price]);
  
  useEffect(() => {
    console.log("With both dependency useeffect(ComponentDidUpdate)");
  }, [price,count]);

   useEffect(() => {
     return () => {
       console.log("Component unmount");
     };
   }, []);
    
    
    const onCountDecrement = () => {
        setCount(c=>c-1)
    }
    
    const onCountIncrement = () => {
        setCount(c=>c+1)
    }

    const onPriceDecrement = () => {
      setPrice((c) => c - 100);
    };

    const onPriceIncrement = () => {
      setPrice((c) => c + 100);
    };
  
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
   
  console.log(address)
  return (
        <React.Fragment>
        <div className="d-flex w-50 justify-content-around mt-4">
          <button onClick={onCountDecrement}>-</button>
          <h2>{count}</h2>
          <button onClick={onCountIncrement}>+</button>
        </div>
        <div className="d-flex w-50 justify-content-around mt-4">
          <button onClick={onPriceDecrement}>-</button>
          <h2>{price}</h2>
          <button onClick={onPriceIncrement}>+</button>
        </div>
        <input type="text" placeholder="Enter new address" onBlur={(e) => handleAddress(e)}></input>
        <h1>Current Address:{address}</h1>
        <h1>Previous Address:{previousAddress}</h1>
      </React.Fragment>
    );
}