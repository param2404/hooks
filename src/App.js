import React, { useState } from 'react';
import Hooks2 from './components/Hooks2'
import Function from './components/Hooks1'


function App() {
  const [show, setShow] = useState(false)
  
  const changeView = () => {
      setShow(!show)
  }
  
  return <React.Fragment><button onClick={changeView}>Change</button>{show?<Hooks2/>:<Function/>}</React.Fragment>
}

export default App;
