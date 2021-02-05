import React, { useState,useRef, useEffect } from 'react'

export default function Hooks() {
    const [name, setName] = useState('gh')
  const [lastName, setLastName] = useState('bn');
  
  ////1....cursor ,counter and cursorLast ref created using useRef 
    const cursor = useRef()
  const cursorLast = useRef()
  const counter =useRef(0)
    
  useEffect(() => {
      ///3...focus method is call to atain focus
       cursor.current.focus() 
  }, [])
  
  useEffect(() => {
    //2.increase couter
    counter.current = counter.current + 1;
  }, [name, lastName])

    const editName = (e) => {
        setName(e.target.value)
    }
    const editLastName = (e) => {
      setLastName(e.target.value);
    };

    const submit = (e) => {
      e.preventDefault();
      console.log('submitted')
    }

    const changeFocus = () => {
      // console.log(cursorLast.current)
      //3...focus method called on button click
        cursorLast.current.focus()
    }
  
 
 
    return (
      <React.Fragment>
        <h2>{counter.current}</h2>
        <form onSubmit={submit}>
          <input type="number" value={1} readOnly></input>
          <br />
          {/* 2...Assign ref to input fields */}
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => editName(e)}
            ref={cursor}
            ></input>
            <br/>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => editLastName(e)}
            ref={cursorLast}
          ></input>
          <br />
          <button onClick={changeFocus}>Change focus to Last name and increase counter</button>
        </form>
      </React.Fragment>
    );
}