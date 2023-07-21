

import axios from "axios";

var URL = "http://localhost:7700";



export async function getdata(data) {
  try{
      var res = await axios.post(`${URL}/send`, data);
      console.log(res);
      return true;
  }
  catch(e){
      console.log("Error in send api calling",e.message);
      return false;
  }
}

export async function collectdata() {
  try {
    var res = await axios.get(`${URL}/get`);
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("Error in send api calling", e.message);
    return false;
  }
}

export async function deletehandler(val) {
  console.log(val);
  try {
    var res = await axios.post(`${URL}/delete`,{data:val});
    // console.log(res.data);
    return true;
  } catch (e) {
    console.log("Error in send api calling", e.message);
    return false;
  }
}


export async function updatehandler(val) {
  console.log(val);
  try {
    var res = await axios.post(`${URL}/update`, { data: val });
    // console.log(res.data);
    return true;
  } catch (e) {
    console.log("Error in send api calling", e.message);
    return false;
  }
}