import { useState, useEffect } from "react";
import axios from 'axios'


///custom hooks
export function useFetch(url) {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setData(response));
  // }, [url]);
    
    useEffect(() => {
      axios.get(url)
       .then((response) => setData(response.data))
      .catch(e=>console.log(e))
    }, []);

  return data;
}
