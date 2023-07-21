import React, { useState } from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {getdata} from "../Apis/api";
import { One, Three, Two } from "../Redux/Actions";

import axios from "axios";
import { useDispatch } from 'react-redux';
export default function Create() {
    var l_=["title","author","status","price"];
    var defaltobj={
        "title":"",
        "author":"",
        "status":"",
        "price":""
    }
    var [stateobj,setstateobj]=useState(defaltobj);
    var dispatch=useDispatch();
    // console.log(stateobj);
    async function onsubmithandler(){
        var URL = "http://localhost:7700";
         var b = Object.values(stateobj);
         var c=0;
        b.forEach(e => {
            if (e===""){
                c=1;
            }
        });
        if (c===1){
            alert("Fill the values first");
        }
        else{
            console.log(stateobj);
            var value=getdata(stateobj);
            if(value){
                alert("Value is Submitted")
                setTimeout(()=>{
                    dispatch(One);
                },1000);
            }
            // try{
            //     var res=await axios.post(`${URL}`,stateobj);
            //     console.log(res);
            // }
            // catch(e){
            //     console.log("Error in send api calling",e.message);
            // }
        }
    }
  return (
    <div id="create">
      <h1 style={{ letterSpacing: ".6px", fontSize: "20px", marginTop: "3%" }}>
        Books{" "}
        <ArrowForwardIosIcon
          style={{
            letterSpacing: ".6px",
            fontSize: "20px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />{" "}
        New
      </h1>

      <div style={{ marginTop: "4%" }}>
        {l_.map((e, i) => {
          return (
            <div key={i} id="inpslit">
              {" "}
              {e} : <input name={e}   onChange={(e)=>{

                setstateobj({
                    ...stateobj,[e.target.name]:e.target.value
                })

              }} id="inps" />
            </div>
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", alignItems: "center" , width:"80%"}}
      >
        <button onClick={onsubmithandler} id="btn">Save</button>
      </div>
    </div>
  );
}
