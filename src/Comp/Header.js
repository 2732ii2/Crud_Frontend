import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {One,Two} from "../Redux/Actions";
export default function Header() {
    // var [marginsetter,setmargin]=useState(0);
    var marginsetter=0;
    var state = useSelector((state) => state);
    if (!state){
      marginsetter=0;
    }
    else{
      marginsetter=75;
    }
    console.log(state);
    var dispatch=useDispatch();
  return (
    <div id="header">
      <div id="lbl">
        <div id="init">
          {" "}
          <div onClick={()=>{
            // setmargin(0);
            return dispatch(One);
          }} id="labels">HOME</div>
          <div onClick={()=>{
            // setmargin(75);
            return dispatch(Two);
          }} id="labels">CREATE</div>
        </div>
        <div id='slit'>
            <div style={{marginLeft:`${marginsetter}%`}} id='ins'></div>
        </div>
      </div>
    </div>
  );
}
