


const initstate=0;
var reducer = (state = initstate, action) => {
    console.log(action.type);
  
     
    if (action.type === "two") {
       return (state = 1);
     }
    else if (action.type === "three") {
       return (state = 2);

     }
     else{
      return state=0;
     }
     
};
export default reducer