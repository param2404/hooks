///helps developers to create functionality that can be reused

///Why Custom hooks ?
///Because other hooks(for state mgmnt and lifecycle) can be used 
///If we do not use then it is normal function
///should start with 'use' keyword

import { useEffect, useRef } from 'react';

const usePrevious = (value) => {

    console.log(value)
    //ref created with initial value null
    const ref = useRef(null)
    
    useEffect(() => {
        console.log(ref.current)
        ///it will be called whenever the state change
        //useRef also helps us to remember the previous state 
        ref.current = value
    })
    
    return ref.current
 }

export default usePrevious;