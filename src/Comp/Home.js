import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {collectdata,deletehandler,updatehandler} from "../Apis/api";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { One,Two } from '../Redux/Actions';
export default function Home() {
  var navi=useNavigate();
  var [updval,setupdval]=useState({});
  console.log(updval._id);
  var l_ = ["title", "author", "status", "price"];
  var defaltobj = {
    title: "",
    author: "",
    status: "",
    price: "",
    id:"",
  };
  var [stateobj, setstateobj] = useState(defaltobj);
  console.log(stateobj);
  var dispatch=useDispatch();
  var [arr,setarr]=useState([]);
  var [on_,seton_]=useState("");
  console.log(arr);
  var [inpval,setinpval]=useState({
    val:""
  })
  console.log(inpval.val);
  var [change,setchange]=useState(0);
  var [len,setlen]=useState(0);
  console.log(len);
  var [initiator,setinitia]=useState(0);
  console.log(initiator);
  var filtered_arr=[];
  if(inpval.val!==""){
    if (arr.length !== 0) {
      filtered_arr = arr.filter((e, i) => {
        if (e.title.includes(inpval.val)) {
          return e;
        }
      });
    }
  }
      try{
        console.log(
        filtered_arr,
        filtered_arr[0]? filtered_arr[0].title : ""
      );
      }
      catch(e){
        console.log(e.message);
      }


  async function lastcall(){
    var l1=await collectdata();

    setlen(parseInt(l1.length / 3));
 
    setTimeout(() => {
      if (l1){
        setarr(l1);
      }
    }, 2000);
  }
  useEffect(() => {
    lastcall();
  }, []);
  return (
    <div id="home">
      <h1 style={{ letterSpacing: ".6px" }}>Books</h1>
      <input
        id="inp"
        onChange={(e) => setinpval({ ...inpval, ["val"]: e.target.value })}
        placeholder="Search title"
      />

      {arr.length !== 0 ? (
        <table id="tbl">
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Status</td>
            <td>Price</td>
            <td>
              {" "}
              <div style={{ width: "auto", height: "auto" }}></div>{" "}
            </td>
          </tr>
          {
            <tr>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[0]
                      ? filtered_arr[0].title
                      : "-"
                    : arr[initiator].title
                  : arr[initiator].title}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[0]
                      ? filtered_arr[0].author
                      : "-"
                    : arr[initiator].author
                  : arr[initiator].author}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[0]
                      ? filtered_arr[0].status
                      : "-"
                    : arr[initiator].status
                  : arr[initiator].status}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[0]
                      ? filtered_arr[0].price
                      : "-"
                    : arr[initiator].price
                  : arr[initiator].price}
              </td>
              <td style={{ width: "10%", height: "27%" }}>
                <div style={{ width: "70px", display: "flex" }}>
                  <button
                    style={{
                      background: "green",
                      color: "white",
                      border: "1px solid white",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    <UpdateIcon
                      onClick={() => {
                        seton_("on");
                        var c =
                          inpval.val !== ""
                            ? filtered_arr.length !== 0
                              ? filtered_arr[0]
                                ? filtered_arr[0]
                                : "-"
                              : arr[initiator]
                            : arr[initiator];
                        // console.log(c);
                        setupdval(c);
                      }}
                    />{" "}
                  </button>
                  <button
                    style={{
                      background: "blue",
                      color: "white",
                      border: ".5px solid white",
                      height: "35px",
                    }}
                  >
                    {" "}
                    <DeleteIcon
                      onClick={() => {
                        if (deletehandler(arr[initiator]._id)) {
                          alert("data is deleted");
                          setTimeout(() => {
                            dispatch(Two);
                          }, 0);
                          setTimeout(() => {
                            dispatch(One);
                          }, 1);
                        }
                      }}
                    />
                  </button>
                </div>
              </td>
            </tr>
          }
          {arr[initiator + 1] ? (
            <tr>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[1]
                      ? filtered_arr[1].title
                      : "-"
                    : arr[initiator + 1].title
                  : arr[initiator + 1].title}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[1]
                      ? filtered_arr[1].author
                      : "-"
                    : arr[initiator + 1].author
                  : arr[initiator + 1].author}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[1]
                      ? filtered_arr[1].status
                      : "-"
                    : arr[initiator + 1].status
                  : arr[initiator + 1].status}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[1]
                      ? filtered_arr[1].price
                      : "-"
                    : arr[initiator + 1].price
                  : arr[initiator + 1].price}
              </td>
              <td style={{ width: "10%", height: "27%" }}>
                <div style={{ width: "70px", display: "flex" }}>
                  <button
                    style={{
                      background: "green",
                      color: "white",
                      border: "1px solid white",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    <UpdateIcon
                      onClick={() => {
                        seton_("on");
                        var c =
                          inpval.val !== ""
                            ? filtered_arr.length !== 0
                              ? filtered_arr[1]
                                ? filtered_arr[1]
                                : "-"
                              : arr[initiator + 1]
                            : arr[initiator + 1];
                        // console.log(c);
                        setupdval(c);
                      }}
                    />{" "}
                  </button>
                  <button
                    style={{
                      background: "blue",
                      color: "white",
                      border: ".5px solid white",
                      height: "35px",
                    }}
                  >
                    {" "}
                    <DeleteIcon
                      onClick={() => {
                        if (deletehandler(arr[initiator]._id)) {
                          alert("data is deleted");
                          setTimeout(() => {
                            dispatch(Two);
                          }, 0);
                          setTimeout(() => {
                            dispatch(One);
                          }, 1);
                        }
                      }}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ) : null}

          {arr[initiator + 2] ? (
            <tr>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[2]
                      ? filtered_arr[2].title
                      : "-"
                    : arr[initiator + 2].title
                  : arr[initiator + 2].title}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[2]
                      ? filtered_arr[2].author
                      : "-"
                    : arr[initiator + 2].author
                  : arr[initiator + 2].author}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[2]
                      ? filtered_arr[2].status
                      : "-"
                    : arr[initiator + 2].status
                  : arr[initiator + 2].status}
              </td>
              <td>
                {inpval.val !== ""
                  ? filtered_arr.length !== 0
                    ? filtered_arr[2]
                      ? filtered_arr[2].title
                      : "-"
                    : arr[initiator + 2].price
                  : arr[initiator + 2].price}
              </td>
              <td style={{ width: "10%", height: "27%" }}>
                <div style={{ width: "70px", display: "flex" }}>
                  <button
                    style={{
                      background: "green",
                      color: "white",
                      border: "1px solid white",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    <UpdateIcon
                      onClick={() => {
                        seton_("on");
                        var c =
                          inpval.val !== ""
                            ? filtered_arr.length !== 0
                              ? filtered_arr[2]
                                ? filtered_arr[2]
                                : "-"
                              : arr[initiator + 2]
                            : arr[initiator + 2];
                        // console.log(c);
                        setupdval(c);
                      }}
                    />{" "}
                  </button>
                  <button
                    style={{
                      background: "blue",
                      color: "white",
                      border: ".5px solid white",
                      height: "35px",
                    }}
                  >
                    {" "}
                    <DeleteIcon
                      onClick={() => {
                        if (deletehandler(arr[initiator]._id)) {
                          alert("data is deleted");
                          setTimeout(() => {
                            dispatch(Two);
                          }, 0);
                          setTimeout(() => {
                            dispatch(One);
                          }, 1);
                        }
                      }}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ) : null}

          {on_ ? (
            <div id="blured">
              

              <h2
                style={{
                  color: "white",
                  textShadow: "2px 2px 4px black",
                  textAlign: "center",
                  marginTop: "0px",
                }}
              >
                Update : {updval.title}
              </h2>

              {l_.map((e, i) => {
                if (i !== 3) {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        width: "60%",
                        height: "35px",
                        marginBottom: "10px",
                        marginRight: "auto",
                        marginLeft: "auto",
                        justifyContent: "space-between",
                        fontSize: "22px",
                        textTransform: "capitalize",
                      }}
                    >
                      {e}{" "}
                      <input
                        onChange={(e) => {
                          setstateobj({
                            ...stateobj,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        name={e}
                        type="text"
                        style={{
                          width: "50%",
                          height: "30px",
                          background: "transparent",
                          color: "white",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          letterSpacing: "1.5px",
                        }}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        width: "60%",
                        height: "35px",
                        marginBottom: "10px",
                        marginRight: "auto",
                        marginLeft: "auto",
                        justifyContent: "space-between",
                        fontSize: "22px",
                        textTransform: "capitalize",
                      }}
                    >
                      {e}{" "}
                      <input
                        onChange={(e) => {
                          setstateobj({
                            ...stateobj,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        name={e}
                        type="number"
                        style={{
                          width: "50%",
                          height: "30px",
                          background: "transparent",
                          color: "white",
                          textTransform: "capitalize",
                          fontSize: "18px",
                          letterSpacing: "1.5px",
                        }}
                      />
                    </div>
                  );
                }
              })}
              <button
                onClick={ () => {

                    // setstateobj({
                    //   ...stateobj,
                    //   ["id"]: updval._id,
                    // });

                  // setTimeout(() => {
                    var b = Object.values(stateobj);
                    var c = 0;
                    b.forEach((e,i) => {
                      if (i!==4){
                        if (e === "") {
                          c = 1;
                        }
                      }
                      
                    });
                    if (c === 1) {
                      alert("Fill the values first");
                    } else {
                      console.log(stateobj);
                      updatehandler({ data1:stateobj,data2:[updval._id] }).then((d)=>{
                        console.log(d);
                      }).catch((e)=>{
                        console.log(e);
                      })

                      setTimeout(() => {
                        alert("data is updated");
                      }, 500);
                      
                        seton_("");
                        setTimeout(() => {
                          dispatch(Two);
                        }, 600);
                        setTimeout(() => {
                          dispatch(One);
                        }, 601);
                      
                    }
                  // }, 2000);
                }}
                style={{
                  width: "100px",
                  height: "35px",
                  marginTop: "5px",
                  marginBottom: "5px",
                  background: "white",
                  color: "black",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </table>
      ) : (
        <div id="tbl">{<div id="circle"></div>}</div>
      )}
      <div id="pageslit">
        <div
          style={{
            width: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ArrowBackIosIcon
            onClick={() => {
              console.log("clicked");
              if (initiator !== 0) {
                setinitia((initiator -= 3));
              }
            }}
            style={{ fontSize: "16px", marginRight: "5px" }}
          />
          Page {initiator ? initiator / 3 + 1 : initiator + 1}
          <ArrowForwardIosIcon
            onClick={() => {
              console.log("clicked");
              if (initiator < len * 3 - 3) {
                console.log("this is len", len * 3);
                setinitia((initiator += 3));
              } else if (initiator + 1 > len) {
                console.log("gone iniside");
                console.log(-1 * (arr.length - 3 * initiator));
                // setdefaulteron(1);
              }
            }}
            style={{ fontSize: "16px", marginLeft: "7px" }}
          />
        </div>
      </div>
    </div>
  );
}
