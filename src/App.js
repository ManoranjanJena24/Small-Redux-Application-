import React from 'react'
import Child from './components/Child'
import { useSelector } from 'react-redux';

export default function App() {
  const data = useSelector((c) => c.showwww.value);
  return (

    <div>


      <h1>App {data}</h1>

      <Child />


    </div>



  )
}
