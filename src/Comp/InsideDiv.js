import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home';
import Create from './Create';

export default function InsideDiv() {


   var state= useSelector(state=>state);
   console.log(state);
  return (
    <>
        {
            state ? <Create />: <Home />
        }
    </>
  )
}
